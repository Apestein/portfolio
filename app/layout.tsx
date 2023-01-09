"use client"
import Link from "next/link"
import React, { useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { FaGithub } from "react-icons/fa"

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
          <DarkModeSwitch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
            className="h-8 w-8"
          />
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
        <footer>
          Copyright © 2022 Apestein
          <FaGithub
            onClick={() => window.open("https://github.com/Apestein", "_blank")}
          />
        </footer>
      </body>
    </html>
  )
}
