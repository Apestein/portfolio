"use client"
import Link from "next/link"
import React, { useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { DarkModeToggle } from "react-dark-mode-toggle-2"

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
        <nav className="fixed flex w-full items-center justify-end gap-20 bg-indigo-900 p-2 text-xl">
          {/* <DarkModeToggle
            onChange={() => setDarkMode((prev) => !prev)}
            isDarkMode={darkMode}
          /> */}
          <DarkModeSwitch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
            className="h-10 w-10"
          />
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}