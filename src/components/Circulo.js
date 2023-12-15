export function Circulo({nome,sobrenome}) {
    return (
        <div className="bg-blue-700 flex flex-col shadow-blue-400 
        shadow-xl rounded-xl w-80 rounded-full p-10 text-center justify-center" >
            <span className="text-white font-semibold" >{nome}</span>
            <span className="text-white font-semibold" >{sobrenome}</span>
        </div>
    )
}