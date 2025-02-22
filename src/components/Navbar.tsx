import Link from "next/link"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            FileHub
          </Link>

          <div className="hidden md:flex gap-6">
            <Link 
              href="/"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}