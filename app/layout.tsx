"use client"
import Link from "next/link"
import React, { useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <html>
      <head />
      <body className="grid min-h-screen grid-rows-[min-content_1fr] bg-black text-white">
        <nav className="flex items-center justify-end gap-20 bg-indigo-900 p-3 text-xl">
          <DarkModeSwitch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
