import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'

export default function Notifications() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Notifications</h1>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-4 rounded-xl backdrop-blur-xl bg-white/70 border border-green-100 flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Notification Title</h3>
                  <p className="text-gray-600">This is a sample notification message. It could be about a new message, system update, or community activity.</p>
                  <p className="text-sm text-gray-500 mt-2">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainContent>
    </div>
  )
}

