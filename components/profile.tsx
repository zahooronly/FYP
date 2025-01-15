import React from 'react'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    bio: 'Passionate farmer with 20 years of experience in sustainable agriculture.',
    location: 'Midwest, USA',
    followers: 1234,
    following: 567,
  }

  const posts = [
    { id: 1, author: 'John Doe', content: 'Excited to try out new organic fertilizers this season!', likes: 25, comments: 8 },
    { id: 2, author: 'John Doe', content: 'Just attended a workshop on precision agriculture. The future is here!', likes: 42, comments: 15 },
  ]

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-green-200 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 bg-green-500 rounded-full mr-4"></div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">{user.name}</h1>
              <p className="text-gray-600">{user.location}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{user.bio}</p>
          <div className="flex space-x-4 text-gray-600">
            <span>{user.followers} Followers</span>
            <span>{user.following} Following</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-green-800 mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

