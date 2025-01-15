import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <section className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Welcome to CropChain
          </h2>
          <p className="text-gray-600">
            Connect with farmers, experts, and researchers worldwide. Get
            AI-powered insights for your crops and access the latest
            agricultural innovations.
          </p>
        </section>
        <section className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Latest Community Updates
          </h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/50 border border-green-50">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
                  alt="Sarah Johnson"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">
                    Agricultural Researcher
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                Just published my findings on sustainable irrigation methods.
                Check out the full research paper in the resources section!
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="space-y-6">
        <section className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            AI Crop Analysis
          </h3>
          <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90">
            Start New Analysis
          </Button>
        </section>
        <section className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Marketplace Highlights
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-green-50">
              <img
                src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=100"
                alt="Organic Seeds"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">Organic Seeds</p>
                <p className="text-sm text-gray-500">$24.99</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

