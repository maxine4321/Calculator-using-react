import { useState } from "react";
import CalculatorButton from "./components/CalculatorButton";

function App() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleAC = () => {
    setInput("");
  };

  const handleCaculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("error");
    }};

    const handleClear = () => {
      setInput((prev) => prev.slice(0, -1));
    };
  

  return (
    <div className="flex flex-col bg-gradient-to-r from-emerald-200 via-emerald-400 to-sky-400  items-center  w-fit h-800 p-5 justify-center">
      <div className="mb-4 w-64 p-4">
        <input
          type="text"
          value={input}
          className="w-full  text-right bg-transparent"
          readOnly
        />
      </div>

      <div className="grid grid-cols-4 gap-2 w-64 h-50">
        <CalculatorButton Title={"CE"}onpress={()=>handleAC()}/>
        <CalculatorButton Title={"x"}onpress={()=>handleClear()}/>
        <CalculatorButton Title={"/"} onpress={()=>handleClick("/")}/>
        <CalculatorButton Title={"*"} onpress={()=>handleClick("*")}/>
        <CalculatorButton Title={"7"} onpress={()=>handleClick("7")}/>
        <CalculatorButton Title={"8"} onpress={()=>handleClick("8")}/>
        <CalculatorButton Title={"9"} onpress={()=>handleClick("9")}/>
        <CalculatorButton Title={"-"} onpress={()=>handleClick("-")}/>
        <CalculatorButton Title={"4"} onpress={()=>handleClick("4")}/>
        <CalculatorButton Title={"5"} onpress={()=>handleClick("5")}/>
        <CalculatorButton Title={"6"} onpress={()=>handleClick("6")}/>
        <CalculatorButton Title={"+"} onpress={()=>handleClick("+")}/>
        <CalculatorButton Title={"1"} onpress={()=>handleClick("1")}/>
        <CalculatorButton Title={"2"} onpress={()=>handleClick("2")}/>
        <CalculatorButton Title={"3"} onpress={()=>handleClick("3")}/>
        <div className="row-span-2 flex flex-row"><CalculatorButton Title={"="} onpress={()=>handleCaculate()}/></div>
        <div className="col-span-2"><CalculatorButton Title={"0"} onpress={()=>handleClick("0")}/></div>
        <CalculatorButton Title={"."} onpress={()=>handleClick(".")}/>
       
      </div>
    </div>
  );
}

export default App;
