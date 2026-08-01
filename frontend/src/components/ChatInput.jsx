import { useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function ChatInput({ onSend }) {

    const [text, setText] = useState("");

    function sendMessage(e) {

        e.preventDefault();

        if (!text.trim()) return;

        onSend(text);

        setText("");

    }

    return (

        <form
            onSubmit={sendMessage}
            className="flex gap-3 mt-6"
        >

            <input
                className="
                flex-1
                rounded-xl
                bg-slate-800
                p-4
                text-white
                border
                border-slate-700
                outline-none
                focus:border-cyan-400
                "
                placeholder="Pregunta algo sobre tu perro..."
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />

            <button

                className="
                bg-cyan-500
                hover:bg-cyan-600
                px-6
                rounded-xl
                transition
                "

            >

                <SendHorizontal/>

            </button>

        </form>

    );

}