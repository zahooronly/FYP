import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'
import { Button } from "@/components/ui/button"

export default function Marketplace() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <img
                src={`https://source.unsplash.com/random/300x200?farm,product,${i}`}
                alt={`Product ${i}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">Short description of the product goes here.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">$29.99</span>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </MainContent>
    </div>
  )
}

