"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gradient-to-r from-black/90 to-blue-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300"></div>
              <Image
                src="/placeholder.webp?height=40&width=40"
                alt="Ophiussa Esports Logo"
                width={40}
                height={40}
                className="rounded-full relative z-10"
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              OPHIUSSA
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="/team" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            Team
          </Link>
          <Link href="/matches" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            Matches
          </Link>
          <Link href="/news" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            News
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-900/30 transition-all duration-300">
            <Link href="https://discord.gg/S8djD63hGx" target="_blank">
            Support Us
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-black/95 backdrop-blur-sm">
          <nav className="container flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="flex items-center justify-between py-4 text-lg font-medium text-white hover:text-blue-500 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-between py-4 text-lg font-medium text-white hover:text-blue-500 border-b border-gray-800"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/team"
              className="flex items-center justify-between py-4 text-lg font-medium text-white hover:text-blue-500 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              href="/matches"
              className="flex items-center justify-between py-4 text-lg font-medium text-white hover:text-blue-500 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Matches
            </Link>
            <Link
              href="/news"
              className="flex items-center justify-between py-4 text-lg font-medium text-white hover:text-blue-500 border-b border-gray-800"
              onClick={toggleMenu}
            >
              News
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-between py-4 text-lg font-medium text-white hover:text-blue-500 border-b border-gray-800"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Support Us</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
