import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 pl-20 lg:pl-64">
        <div className="p-8">
          <Header />
          {children}
        </div>
      </main>
    </div>
  )
}
