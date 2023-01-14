"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { FaGithub } from "react-icons/fa"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(true)
  const darkClass = darkMode ? "dark" : ""
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting)
      })
    )
    const listElements = document.querySelectorAll("li")
    listElements.forEach((el) => observer.observe(el))
  }, [])
  return (
    <html className={`${darkClass}`}>
      <head />
      <body className="dark:bg-gradient-star grid min-h-screen grid-rows-[min-content_1fr] font-mono dark:text-white">
        <nav className="fixed z-10 flex w-full items-center justify-end gap-[5vw] px-10 pt-4 md:text-2xl">
          <DarkModeSwitch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
            className="h-6 w-6 md:h-8 md:w-8"
          />
          <Link href="/">
            <span className="rainbow-text">Home</span>
          </Link>
          <Link href="/blog">
            <span className="rainbow-text">Blog</span>
          </Link>
        </nav>
        {children}
        <footer>
          Copyright © 2023 Apestein
          <FaGithub
            className="cursor-pointer"
            onClick={() => window.open("https://github.com/Apestein", "_blank")}
          />
        </footer>
      </body>
    </html>
  )
}
