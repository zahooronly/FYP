/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { MainContent } from "@/components/main-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2 } from "lucide-react";

// This is a mock post. In a real application, you'd fetch this data based on the post ID.
const post = {
  id: 1,
  author: "Sarah Johnson",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
  content:
    "Just published my findings on sustainable irrigation methods. Check out the full research paper in the resources section! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  likes: 24,
  comments: [
    {
      id: 1,
      author: "John Doe",
      content: "Great work! This will be very helpful for many farmers.",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
    },
    {
      id: 2,
      author: "Jane Smith",
      content:
        "I'm excited to try these methods on my farm. Thanks for sharing!",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
  ],
  timestamp: "2h ago",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function PostPage() {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "You",
          content: newComment,
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar />
      <MainContent>
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="text-green-600 hover:underline mb-4 inline-block"
          >
            &larr; Back to Home
          </Link>
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100 mb-6">
            <div className="flex items-center mb-4">
              <img
                src={post.avatar || "/placeholder.svg"}
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-gray-800">{post.author}</p>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex justify-between text-gray-500">
              <button
                onClick={handleLike}
                className="flex items-center space-x-1 hover:text-green-600"
              >
                <Heart className="w-5 h-5" />
                <span>{likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-600">
                <MessageCircle className="w-5 h-5" />
                <span>{comments.length}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-600">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/70 border border-green-100 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Comments
            </h2>
            <div className="space-y-4 mb-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-3">
                  <img
                    src={comment.avatar || "/placeholder.svg"}
                    alt={comment.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {comment.author}
                    </p>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow"
              />
              <Button onClick={handleComment}>Post</Button>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
}
