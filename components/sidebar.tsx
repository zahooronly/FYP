'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Bot, ShoppingBag, MessageSquare, Settings, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Users, label: 'Community', href: '/community' },
  { icon: Bot, label: 'AI Diagnosis', href: '/diagnosis' },
  { icon: ShoppingBag, label: 'Marketplace', href: '/marketplace' },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <aside 
      className={cn(
        "h-screen sticky top-0 backdrop-blur-xl bg-white/70 border-r border-green-100 transition-all duration-300 ease-in-out z-50",
        isCollapsed ? "w-20" : "w-64",
        "md:block", // Hide on mobile, show on larger screens
        "absolute inset-y-0 left-0 -translate-x-full transition-transform md:relative md:translate-x-0" // Mobile slide-out menu
      )}
    >
      <div className="p-6 flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shrink-0">
          <span className="text-white font-semibold">C</span>
        </div>
        {!isCollapsed && (
          <h1 className="text-xl font-semibold text-green-800">
            CropChain
          </h1>
        )}
      </div>
      <nav className="mt-6">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-4 px-6 py-3 text-gray-600 hover:bg-green-50/50 transition-colors",
              pathname === href && "text-green-600 bg-green-50/50"
            )}
          >
            <Icon size={20} />
            {!isCollapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-6 h-8 w-8 rounded-full border border-green-100 bg-white flex items-center justify-center hover:bg-green-50 transition-colors"
      >
        <ChevronLeft className={cn(
          "h-4 w-4 transition-transform duration-300",
          isCollapsed && "rotate-180"
        )} />
      </button>
    </aside>
  )
}

