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
        <nav className="fixed flex w-full items-center justify-end gap-[5vw] bg-indigo-900 p-2 md:text-2xl">
          {/* <DarkModeToggle
            onChange={() => setDarkMode((prev) => !prev)}
            isDarkMode={darkMode}
          /> */}
          <DarkModeSwitch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
            className="h-8 w-8"
          />
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
