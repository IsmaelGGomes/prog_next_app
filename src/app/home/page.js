export default function Home() {
    return (
        <div>
            <h1>Home titulo</h1>
            <Quadrado />
        </div>
    );
}

function Quadrado() {
    return (
        <div className="bg-red-700 h-10 w-10 p-10 text-center justify-center flex" >
            <span className="text-white font-semibold" >texto</span>
        </div>
    )
}