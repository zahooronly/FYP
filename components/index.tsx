import React from 'react'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

export default function FrontPage() {
  const posts = [
    { id: 1, author: 'John Doe', content: 'Just harvested my corn crop. Great yield this year!', likes: 15, comments: 3 },
    { id: 2, author: 'Jane Smith', content: 'Anyone have tips for dealing with aphids on tomato plants?', likes: 8, comments: 12 },
    { id: 3, author: 'Mike Johnson', content: 'New sustainable irrigation system installed. Excited to see the results!', likes: 22, comments: 7 },
  ]

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Latest Updates</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

