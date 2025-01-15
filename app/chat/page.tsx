"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Header } from "@/components/Header";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! How can I assist you with your farming needs today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", content: input }]);
      setInput("");
      // Here you would typically call an API to get the bot's response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "I'm processing your request. Please give me a moment.",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-neutral-800 mb-6">
            AI Chatbot
          </h1>
          <div className="bg-white rounded-2xl shadow-sm h-[500px] flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === "user" ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`inline-block rounded-2xl p-3 ${
                      message.type === "user"
                        ? "bg-green-500 text-white"
                        : "bg-neutral-100 text-neutral-800"
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-neutral-200 p-4">
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-neutral-100 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="bg-green-500 text-white rounded-r-full px-4 py-2 hover:bg-green-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
