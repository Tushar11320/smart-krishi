import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ChatWindow() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello Farmer 🚜",
      sender: "bot",
    },
  ]);

  const sendMessage = () => {

    if (message.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
    };

    setMessages([...messages, newMessage]);

    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">

      {/* Header */}
      <div className="bg-green-600 text-white p-5">
        <h2 className="text-2xl font-bold">
          Smart Krishi Chat
        </h2>

        <p className="text-sm text-green-100">
          Talk with farmers and buyers
        </p>
      </div>

      {/* Messages */}
      <div className="h-[500px] overflow-y-auto p-5 bg-gray-100 space-y-4">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`px-5 py-3 rounded-2xl max-w-xs shadow-md ${
                msg.sender === "user"
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {msg.text}
            </div>

          </div>
        ))}

      </div>

      {/* Input */}
      <div className="flex items-center p-4 border-t bg-white">

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={sendMessage}
          className="ml-3 bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition"
        >
          <Send size={22} />
        </button>

      </div>
    </div>
  );
}