import CalcDisplay from "./CalcDisplay";
import CalcButtonPanel from "./CalcButtonPanel";

const Calculator = () => {
    return (
        <div className="border-[20px] border-slate-900 bg-slate-900 rounded-xl max-w-xs mx-auto my-8 shadow-2xl">
            <CalcDisplay />
            <CalcButtonPanel />
        </div>
    );
};
export default Calculator;
