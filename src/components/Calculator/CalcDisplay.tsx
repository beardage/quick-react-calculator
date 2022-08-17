import { useDisplay } from "../../context/DisplayContext";

const CalcDisplay = () => {
    const { displayValue } = useDisplay();
    return (
        <div className="h-16 overflow-hidden bg-gray-300 text-slate-800 py-4 px-2 mb-4 text-2xl text-right w-full rounded shadow-[inset_0_5px_10px_0_rgba(0,0,0,0.3)]">
            {displayValue}
        </div>
    );
};
export default CalcDisplay;
