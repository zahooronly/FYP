import Header from '../components/Header'
import { SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-neutral-800 mb-6">Search CropChain</h1>
          <div className="mb-8">
            <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden">
              <input
                type="text"
                placeholder="Search for farmers, posts, or agricultural topics..."
                className="flex-1 px-6 py-3 focus:outline-none"
              />
              <button className="bg-green-500 text-white px-6 py-3 hover:bg-green-600 transition-colors">
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-800 mb-4">Trending Topics</h2>
            <ul className="space-y-2 text-neutral-600">
              <li>• Sustainable Farming Practices</li>
              <li>• Organic Pest Control</li>
              <li>• Water Conservation Techniques</li>
              <li>• Crop Rotation Strategies</li>
              <li>• Agricultural Technology Innovations</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

