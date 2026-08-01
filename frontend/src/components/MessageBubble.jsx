import ReactMarkdown from "react-markdown";
import SourceCard from "./SourceCard";

export default function MessageBubble({ message }) {

    const isUser = message.role === "user";

    return (

        <div
            className={`flex mb-6 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >

            <div
                className={`
                    max-w-3xl
                    rounded-2xl
                    px-5
                    py-4
                    shadow-lg
                    ${
                        isUser
                            ? "bg-cyan-600 text-white"
                            : "bg-slate-800 text-slate-100"
                    }
                `}
            >

                <ReactMarkdown>
                    {message.content}
                </ReactMarkdown>

                {

                    !isUser &&
                    message.sources &&
                    message.sources.length > 0 && (

                        <div className="mt-5">

                            <p className="text-sm text-slate-400 mb-2">

                                Fuentes consultadas

                            </p>

                            {

                                message.sources.map((source, index) => (

                                    <SourceCard
                                        key={index}
                                        source={source}
                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </div>

    );

}