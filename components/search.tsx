import React from 'react'
import Layout from '../components/Layout'
import { SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Search CropChain</h1>
        <div className="mb-8">
          <div className="flex items-center border border-green-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for farmers, posts, or agricultural topics..."
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-green-500 text-white px-4 py-2 hover:bg-green-600">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green-800">Trending Topics</h2>
          <ul className="list-disc list-inside text-green-700">
            <li>Sustainable Farming Practices</li>
            <li>Organic Pest Control</li>
            <li>Water Conservation Techniques</li>
            <li>Crop Rotation Strategies</li>
            <li>Agricultural Technology Innovations</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

