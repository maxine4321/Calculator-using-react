export default function CalculatorButton({Title, onpress}){ 
    return(
        <button className='p-2 rounded-lg bg-white text-gray-700 font-sans font-medium text-lg w-full text-center'onClick={onpress}>{Title}</button>
    )
}