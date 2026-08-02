export default function Header() {

    return (

        <header className="border-b border-slate-800 bg-slate-950">

            <div className="max-w-5xl mx-auto py-6 px-6">

                <h1 className="text-3xl font-bold text-cyan-400">

                    🐶 KratosVet AI

                </h1>

                <p className="text-slate-300 mt-2">

                    Asistente Veterinario Inteligente basado en IA Generativa + RAG

                </p>

                <p className="text-sm text-slate-500 mt-2">

                    FastAPI • React • OpenAI • LangChain • ChromaDB

                </p>

            </div>

        </header>

    );

}