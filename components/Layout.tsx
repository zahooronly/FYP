import React, { ReactNode } from 'react'
import Link from 'next/link'
import { Home, User, MessageCircle, Search, HelpCircle } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CropChain
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-green-200">
                  <Home className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-green-200">
                  <User className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-green-200">
                  <MessageCircle className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-green-200">
                  <Search className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-green-200">
                  <HelpCircle className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </div>
  )
}

