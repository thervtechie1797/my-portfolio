import React, {useState} from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'


const ChatBot = () => {
    const [messages, setMessages] = useState([]); 
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

    const handleSend = async () => {
        if(!input.trim()) return;

        const newMessages = [...messages, {role: "user", text: input}];
        setMessages(newMessages);
        setInput("");
        setLoading(true);


        try {
            const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});
            const result = await model.generateContent(input);
            const reply = result.response.text();
            
            setMessages([...newMessages, {role: "bot", text: reply}]);
        } catch (error) {
            console.error(error);
            setMessages([...newMessages, {role: "bot", text: "⚠️ Something went wrong! Check console for details."}]);
        } finally {
            setLoading(false);
        }

    }

    return (
    <div className='fixed bottom-6 right-6 z-50'>
        <button 
        onClick={()=> setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
            💬
        </button>

        {/* Chat Window */}
        {isOpen && (
            <div className='fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-xl border overflow-hidden'>
                <div className='bg-blue-600 text-white p-4 font-semibold'>Ask Rohit AI 🤖</div>

                <div className='h-80 overflow-y-auto p-4 space-y-2'>
                    {messages.map((msg, i)=> (
                        <div 
                            key={i}
                            className={`p-2 rounded-lg ${
                            msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
                        } `}
                        >   
                            {msg.text}
                        </div>
                    ))}
                    {loading && <p className='text-gray-500 italic text-sm'>Thinking....</p>}
                </div>
                <div className='flex p-3 border-t bg-gray-50'>
                    <input
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        onKeyDown={(e)=> e.key === "Enter" && handleSend()}
                        placeholder='Ask me anything...'
                        className='flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none' 
                    />
                    <button
                        onClick={handleSend}
                        className='ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'                    
                    >
                        Send
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default ChatBot