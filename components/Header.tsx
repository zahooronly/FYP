import { Bell, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          type="text"
          placeholder="Search CropChain"
          className="pl-10 pr-4 w-[300px] backdrop-blur-xl bg-white/70 border-green-100 focus:ring-green-500/20"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="backdrop-blur-xl bg-white/70 border-green-100 hover:bg-white/80"
        >
          <Bell size={20} className="text-gray-600" />
        </Button>
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
  )
}

