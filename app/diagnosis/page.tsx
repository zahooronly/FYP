import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'
import { Button } from "@/components/ui/button"

export default function AIDiagnosis() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">AI Crop Diagnosis</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Crop Image</h2>
            <p className="text-gray-600 mb-4">
              Upload an image of your crop for AI-powered analysis and diagnosis.
            </p>
            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90">
              Upload Image
            </Button>
          </div>
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Diagnoses</h2>
            <ul className="space-y-2">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-green-50">
                  <img
                    src={`https://source.unsplash.com/random/100x100?plant,${i}`}
                    alt={`Diagnosis ${i}`}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Diagnosis #{i}</p>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MainContent>
    </div>
  )
}

