import { ReactNode, useState } from "react";
import { useDisplay } from "../../context/DisplayContext";
import { evaluate } from "mathjs";

type CalcButtonParams = {
    value?: number | "." | "+" | "-" | "/" | "*" | "evaluate" | "clear";
    className?: string;
    children: ReactNode;
};
const operators = [".", "+", "-", "/", "*"];

const CalcButton = ({ value, className, children }: CalcButtonParams) => {
    const { displayValue, setDisplayValue } = useDisplay();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleOnClick = () => {
        if (value === "clear") {
            setDisplayValue("");
        }
        if (value === "evaluate") {
            // TODO: parse displayValue and setDisplayValue with evaluated value
            setDisplayValue(String(evaluate(displayValue)));
        }
        // when a non-number value submits, check for non-number values in the last postition of the displayValue <string>
        if (operators.indexOf(value as string) > 0) {
            const lastVal = displayValue.slice(-1);
            if (operators.indexOf(lastVal) > 0) {
                setErrorMessage("Error: Two operators in a row");
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                    setErrorMessage("");
                }, 5000);
                return;
            }
        }
        if (value !== "evaluate" && value !== "clear") {
            // TODO: check for last character being a non-int and swap instead of adding
            // TODO: check for empty string and show error when non-int value
            setDisplayValue(displayValue + value);
        }
    };

    return (
        <button
            className={`bg-gray-700 text-xl rounded p-2 transition-all duration-75 -translate-y-0.5 shadow-sm active:shadow-none active:translate-y-0 ${className}`}
            type="button"
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
};
export default CalcButton;
