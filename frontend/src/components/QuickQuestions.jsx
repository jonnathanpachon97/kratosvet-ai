const questions = [

    "¿Cuántas veces debe comer un bulldog francés?",

    "¿Por qué no debe tener sobrepeso?",

    "¿Qué problemas respiratorios tiene?",

    "¿Qué cuidados necesita un bulldog francés?"

];

export default function QuickQuestions({ onSelect }) {

    return (

        <div className="mb-8">

            <p className="text-slate-400 mb-3">

                Preguntas sugeridas

            </p>

            <div className="flex flex-wrap gap-3">

                {

                    questions.map((question) => (

                        <button

                            key={question}

                            onClick={() => onSelect(question)}

                            className="
                                bg-slate-800
                                hover:bg-slate-700
                                rounded-xl
                                px-4
                                py-2
                                transition
                            "

                        >

                            {question}

                        </button>

                    ))

                }

            </div>

        </div>

    );

}