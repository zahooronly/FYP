import React from 'react'
import Layout from '../components/Layout'
import { Send } from 'lucide-react'

export default function Chatbot() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">AI Chatbot</h1>
        <div className="bg-white border border-green-200 rounded-lg shadow-sm h-[500px] flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-green-100 rounded-lg p-3 inline-block">
                <p className="text-green-800">Hello! How can I assist you with your farming needs today?</p>
              </div>
            </div>
            <div className="mb-4 text-right">
              <div className="bg-green-500 text-white rounded-lg p-3 inline-block">
                <p>I'm having issues with my tomato plants. They have yellow leaves.</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-green-100 rounded-lg p-3 inline-block">
                <p className="text-green-800">Yellow leaves on tomato plants could be a sign of nutrient deficiency or overwatering. Let's troubleshoot this issue...</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-200 p-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-green-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white rounded-r-lg px-4 py-2 hover:bg-green-600">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

