"use client"
import { useChat, Message } from "ai/react"


export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    console.log(messages);
    console.log(input);
    return (
        <div>
            {messages.map((message: Message) => {
                return (
                    <div key={message.id}>
                        {/* Name of person talking */}
                        {
                            //if-else statement in react
                            message.role === "assistant"
                                ?
                                <h3 className="text-lg font-semibold mt-2">GPT-4</h3>
                                :
                                <h3 className="text-lg font-semibold mt-2">User</h3>

                        }


                        {message.content.split("\n").map((currentTextBlock: string, index: number) => {
                            if (currentTextBlock === "") {
                                return <p key={message.id + index}>&nbsp;</p>
                            }
                            else {
                                return <p key={message.id + index}>{currentTextBlock}</p>
                            }
                        })}
                        {/* Message */}
                    </div>

                )
            })}
            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User Message</p>
                <textarea
                    className="mt-2 w-full bg-slate-600 p-2"
                    placeholder={"What's your curly hair routine?"}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-blue-600 p-2 mt-2">
                    Send Message
                </button>
            </form>
        </div>
    )
}