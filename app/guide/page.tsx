'use client'

import { useState } from 'react'
import Header from '../components/Header'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const steps = [
  {
    title: 'Welcome to CropChain',
    content: 'CropChain is your all-in-one platform for agricultural insights, community engagement, and AI-powered assistance.',
  },
  {
    title: 'Explore the Feed',
    content: 'Scroll through posts from farmers and experts. Like, comment, and share valuable information with your network.',
  },
  {
    title: 'AI Crop Analysis',
    content: 'Upload photos of your crops to get instant AI-powered health analysis and recommendations.',
  },
  {
    title: 'Connect with Experts',
    content: 'Use the search feature to find and connect with agricultural experts and fellow farmers.',
  },
  {
    title: 'Ask the AI Chatbot',
    content: 'Got a farming question? Our AI chatbot is available 24/7 to provide instant answers and advice.',
  },
]

export default function UserGuide() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-neutral-800 mb-6">Welcome to CropChain</h1>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-neutral-800 mb-2">{steps[currentStep].title}</h2>
              <p className="text-neutral-600">{steps[currentStep].content}</p>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className="px-4 py-2 bg-neutral-100 text-neutral-600 rounded-full hover:bg-neutral-200 transition-colors flex items-center"
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </button>
              <span className="text-neutral-500">
                Step {currentStep + 1} of {steps.length}
              </span>
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex items-center"
                >
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep(0)}
                  className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

