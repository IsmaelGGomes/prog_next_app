import { Circulo } from "@/components/Circulo";

export default function Home() {

    let lista = [
        { nome: 'logan', idade: 19},
        { nome: 'tela', idade: 20},
        { nome: 'teclado', idade: 15},
    ]

    return (
        <div className="h-screen w-screen p-20">
            <div className="flex flex-col gap-10">
                <Quadrado />
                <QuadradoAzul nome={'ismael'} sobrenome={'gomes'} />
                <Circulo nome={'bolinha'} sobrenome={'computador'}/>
            </div>
        </div>
    );
}

function Quadrado() {
    return (
        <div className="bg-red-700 shadow-red-400 shadow-xl rounded-xl h-10 w-10 p-10 text-center justify-center flex" >
            <span className="text-white font-semibold" >texto</span>
        </div>
    )
}

function QuadradoAzul({nome,sobrenome}) {
    return (
        <div className="bg-blue-700 flex flex-col shadow-blue-400 shadow-xl rounded-xl h-auto w-80 p-10 text-center justify-center" >
            <span className="text-white font-semibold" >{nome}</span>
            <span className="text-white font-semibold" >{sobrenome}</span>
        </div>
    )
}