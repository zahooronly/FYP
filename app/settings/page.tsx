import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Settings() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h1>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    id="bio"
                    rows={3}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Tell us about yourself"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Notification Preferences</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-green-500" />
                  <span className="ml-2">Email notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-green-500" />
                  <span className="ml-2">Push notifications</span>
                </label>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90">
              Save Changes
            </Button>
          </div>
        </div>
      </MainContent>
    </div>
  )
}

