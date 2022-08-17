import { ReactNode } from "react";
import { useDisplay } from "../../context/DisplayContext";

type CalcButtonParams = {
    value?: number | string;
    operator?:
        | "add"
        | "subtract"
        | "divide"
        | "multiply"
        | "evaluate"
        | "clear";
    className?: string;
    children: ReactNode;
};
const CalcButton = ({
    value,
    operator,
    className,
    children,
}: CalcButtonParams) => {
    const { displayValue, setDisplayValue } = useDisplay();

    const handleOnClick = () => {
        if (value) {
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
