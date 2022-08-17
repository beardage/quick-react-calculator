import CalcButton from "./CalcButton";

const CalcButtonPanel = () => {
    //<CalcButton value="0" />
    return (
        <>
            <div className=" grid gap-2 grid-cols-4">
                <div className="col-span-3 grid grid-cols-3 gap-2">
                    <CalcButton value={7}>7</CalcButton>
                    <CalcButton value={8}>8</CalcButton>
                    <CalcButton value={9}>9</CalcButton>

                    <CalcButton value={4}>4</CalcButton>
                    <CalcButton value={5}>5</CalcButton>
                    <CalcButton value={6}>6</CalcButton>

                    <CalcButton value={1}>1</CalcButton>
                    <CalcButton value={2}>2</CalcButton>
                    <CalcButton value={3}>3</CalcButton>

                    <CalcButton className="col-span-2" value={0}>
                        0
                    </CalcButton>
                    <CalcButton value={"."}>.</CalcButton>
                </div>
                <div className="grid gap-2">
                    <CalcButton operator="clear">AC</CalcButton>
                    <CalcButton operator="add">&#43;</CalcButton>
                    <CalcButton operator="subtract">&minus;</CalcButton>
                    <CalcButton operator="divide">&divide;</CalcButton>
                    <CalcButton operator="multiply">&times;</CalcButton>
                    <CalcButton className="bg-amber-500" operator="evaluate">
                        &#61;
                    </CalcButton>
                </div>
            </div>
        </>
    );
};
export default CalcButtonPanel;
