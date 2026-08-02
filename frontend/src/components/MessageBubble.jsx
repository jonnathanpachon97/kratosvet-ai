import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SourceCard from "./SourceCard";
import { User, PawPrint } from "lucide-react";

export default function MessageBubble({ message }) {

    const isUser = message.role === "user";

    return (

        <div
            className={`flex gap-3 mb-6 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >

            {/* Avatar IA */}

            {!isUser && (

                <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">

                    <PawPrint size={20} />

                </div>

            )}

            {/* Mensaje */}

            <div
                className={`
                    max-w-3xl
                    rounded-2xl
                    px-5
                    py-4
                    shadow-lg
                    transition-all
                    duration-300
                    ${
                        isUser
                            ? "bg-cyan-600 text-white"
                            : "bg-slate-800 text-slate-100"
                    }
                `}
            >

                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.content}
                </ReactMarkdown>

                {

                    !isUser &&
                    message.sources &&
                    message.sources.length > 0 && (

                        <div className="mt-5">

                            <p className="text-sm text-slate-400 mb-2">

                                📚 Fuentes consultadas

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

            {/* Avatar Usuario */}

            {isUser && (

                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">

                    <User size={20} />

                </div>

            )}

        </div>

    );

}