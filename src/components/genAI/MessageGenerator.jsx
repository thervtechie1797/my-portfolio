import React, { useState }  from 'react'
import { GoogleGenAI } from '@google/genai'

const MessageGenerator = ({onMsgGenerated}) => {
    const [input, setInput] = useState("");
    const [generatedMsg, setGeneratedMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});

    const handleGenerateMsg = async () => {
        if(!input) return;
        setLoading(true);
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Generate a personalized message for someone interested in ${input}`,
            });
            setGeneratedMsg(response.text);

            if(onMsgGenerated) {
                onMsgGenerated(response.text);
            }
        } catch (error) {
            console.error("Error generating message:", error);
        } finally {
            setLoading(false);
        }
    };


  return (
    <div className="mb-6">
      <label className="block font-medium mb-2 text-gray-800">
        Generate Message (Optional)
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a topic (e.g., project inquiry)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-400"
        />
        <button
          onClick={handleGenerateMsg}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
      {generatedMsg && (
        <textarea
          className="w-full mt-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-400"
          rows={4}
          value={generatedMsg}
          readOnly
        />
      )}
    </div>

  );
}

export default MessageGenerator