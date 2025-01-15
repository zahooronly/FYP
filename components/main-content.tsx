'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Search, Bell, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function MainContent({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [showNotifications, setShowNotifications] = React.useState(false)

  return (
    <main className="flex-1 p-4 md:p-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="relative w-full md:w-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search CropChain"
            className="pl-10 pr-4 py-2 rounded-xl backdrop-blur-xl bg-white/70 border border-green-100 focus:outline-none focus:ring-2 focus:ring-green-500/20 w-full md:w-[300px]"
          />
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl backdrop-blur-xl bg-white/70 border-green-100 hover:bg-white/80">
                <Bell size={20} className="text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New message from Sarah</DropdownMenuItem>
              <DropdownMenuItem>Your crop analysis is ready</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/notifications')}>
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-3 p-1.5 rounded-xl backdrop-blur-xl bg-white/70 border border-green-100">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
              alt="Profile"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <div className="hidden lg:block pr-2">
              <p className="text-sm font-medium text-gray-800">John Smith</p>
              <p className="text-xs text-gray-500">Organic Farmer</p>
            </div>
          </div>
        </div>
      </header>
      {children}
    </main>
  )
}

