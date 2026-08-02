export default function Loading() {

    return (

        <div className="flex items-center gap-3 rounded-xl bg-slate-800 p-4 mt-6">

            <div className="h-3 w-3 animate-ping rounded-full bg-cyan-400"></div>

            <span className="text-slate-300">

                🐶 Kratos está consultando la base documental...

            </span>

        </div>

    );

}