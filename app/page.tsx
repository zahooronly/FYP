import Link from 'next/link'
import { Sidebar } from '@/components/sidebar'
import { MainContent } from '@/components/main-content'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Share2 } from 'lucide-react'

const posts = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    content: "Just published my findings on sustainable irrigation methods. Check out the full research paper in the resources section!",
    likes: 24,
    comments: 5,
    timestamp: "2h ago"
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
    content: "Excited to try out new organic fertilizers this season! Has anyone had experience with bio-char?",
    likes: 18,
    comments: 7,
    timestamp: "4h ago"
  },
  // Add more sample posts as needed
]

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <Input placeholder="What's happening in your farm?" className="mb-4" />
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90">
                Post Update
              </Button>
            </div>
            {posts.map((post) => (
              <div key={post.id} className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
                <div className="flex items-center mb-4">
                  <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <Link href={`/post/${post.id}`} className="text-green-600 hover:underline mb-4 inline-block">
                  View full post
                </Link>
                <div className="flex justify-between text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-green-600">
                    <Heart className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-600">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-600">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <section className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                AI Crop Analysis
              </h3>
              <Link href="/diagnosis">
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90">
                  Start New Analysis
                </Button>
              </Link>
            </section>
            <section className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Trending Topics
              </h3>
              <ul className="space-y-2">
                <li className="text-green-600 hover:underline cursor-pointer">#SustainableFarming</li>
                <li className="text-green-600 hover:underline cursor-pointer">#OrganicPestControl</li>
                <li className="text-green-600 hover:underline cursor-pointer">#WaterConservation</li>
                <li className="text-green-600 hover:underline cursor-pointer">#CropRotation</li>
              </ul>
            </section>
          </div>
        </div>
      </MainContent>
    </div>
  )
}

