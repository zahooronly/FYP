import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Messages() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Messages</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          <div className="lg:col-span-1 overflow-y-auto">
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-green-50 cursor-pointer hover:bg-white/70">
                  <img
                    src={`https://source.unsplash.com/random/100x100?portrait,${i}`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">User Name</p>
                    <p className="text-sm text-gray-500 truncate">Last message preview...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`flex ${i % 2 === 0 ? 'justify-end' : ''}`}>
                  <div className={`max-w-[70%] p-3 rounded-xl ${i % 2 === 0 ? 'bg-green-100' : 'bg-white/70 border border-green-50'}`}>
                    <p className="text-gray-800">This is a sample message.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white/70 border-t border-green-100">
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  )
}

