import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'
import { Button } from "@/components/ui/button"

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">John Smith</h1>
                <p className="text-gray-600">Organic Farmer</p>
                <p className="text-sm text-gray-500 mt-2">Joined CropChain in 2023</p>
                <Button className="mt-4">Edit Profile</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-600">
                Passionate organic farmer with 10 years of experience. Specializing in sustainable farming practices and crop rotation techniques.
              </p>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">My Crops</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Organic Tomatoes</li>
                <li>Heirloom Carrots</li>
                <li>Non-GMO Corn</li>
                <li>Organic Lettuce</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <ul className="space-y-2">
                <li className="text-gray-600">Posted a new community update</li>
                <li className="text-gray-600">Completed an AI crop analysis</li>
                <li className="text-gray-600">Listed new items in the marketplace</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Certified Organic Farmer</li>
                <li>Sustainable Agriculture Practitioner</li>
                <li>Permaculture Design Certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  )
}

