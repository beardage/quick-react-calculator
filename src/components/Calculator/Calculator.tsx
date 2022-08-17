import CalcDisplay from "./CalcDisplay";
import CalcButtonPanel from "./CalcButtonPanel";
import { DisplayContextProvider } from "../../context/DisplayContext";

const Calculator = () => {
    return (
        <DisplayContextProvider value={"4143110"}>
            <div className="border-[20px] border-slate-900 bg-slate-900 rounded-xl max-w-xs mx-auto my-8 shadow-2xl">
                <CalcDisplay />
                <CalcButtonPanel />
            </div>
        </DisplayContextProvider>
    );
};
export default Calculator;
