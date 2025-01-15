import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'

export default function Community() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Community</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`https://source.unsplash.com/random/100x100?farm,${i}`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">User Name</p>
                  <p className="text-xs text-gray-500">Farmer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Sharing my experience with new organic fertilizers. Great results so far!
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>2 hours ago</span>
                <span>5 comments</span>
              </div>
            </div>
          ))}
        </div>
      </MainContent>
    </div>
  )
}

