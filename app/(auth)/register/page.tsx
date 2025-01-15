import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Register - CropChain',
  description: 'Create your CropChain account',
}

export default function RegisterPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card className="backdrop-blur-xl bg-white/70 border-green-100">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                <span className="text-white font-semibold">C</span>
              </div>
              <h2 className="text-2xl font-semibold text-green-800">CropChain</h2>
            </div>
            <CardDescription>
              Create an account to get started with CropChain
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="name"
                type="text"
                placeholder="Full Name"
                className="backdrop-blur-xl bg-white/70 border-green-100"
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="backdrop-blur-xl bg-white/70 border-green-100"
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="backdrop-blur-xl bg-white/70 border-green-100"
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                className="backdrop-blur-xl bg-white/70 border-green-100"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90">
              Create Account
            </Button>
            <div className="text-sm text-gray-600 text-center">
              Already have an account?{' '}
              <Link href="/login" className="text-green-600 hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

