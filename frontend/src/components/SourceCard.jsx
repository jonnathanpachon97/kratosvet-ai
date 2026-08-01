export default function SourceCard({ source }) {

    const name = source.document
        .split("\\")
        .pop()
        .replace(".pdf", "")
        .replaceAll("_", " ");

    return (

        <div className="mt-2 rounded-lg border border-slate-600 bg-slate-700/60 px-4 py-3">

            <div className="font-medium text-cyan-300">

                📄 {name}

            </div>

            <div className="text-xs text-slate-400 mt-1">

                Página {source.page}

            </div>

        </div>

    );

}