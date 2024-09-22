export default function CalculatorButton({Title, onpress, accent=false}){ 
    return(
        <button className={`px-2 py-3 rounded-lg ${accent? "bg-emerald-300 text-white": "bg-white text-gray-700"} font-sans font-medium text-lg w-full text-center text-[30px]`}onClick={onpress}>{Title}</button>
    )
}