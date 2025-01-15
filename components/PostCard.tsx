import { Heart, MessageCircle, Share2 } from 'lucide-react'

interface Post {
  id: number
  author: string
  content: string
  likes: number
  comments: number
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full mr-3 flex items-center justify-center text-green-600 font-semibold">
          {post.author[0]}
        </div>
        <span className="font-medium text-neutral-800">{post.author}</span>
      </div>
      <p className="text-neutral-600 mb-4">{post.content}</p>
      <div className="flex justify-between text-neutral-500">
        <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
          <Heart className="w-5 h-5" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  )
}

