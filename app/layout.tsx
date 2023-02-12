"use client"
import "./globals.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { FaGithub } from "react-icons/fa"
import { Stars } from "./(components)/Animations"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(true)
  const darkClass = darkMode ? "dark" : ""
  // const pathname = usePathname()
  // useEffect(() => {
  //   const listElements = document.querySelectorAll("li, .no-show")
  //   if (!listElements.length) return
  //   const observer = new IntersectionObserver((entries) =>
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) entry.target.classList.add("show")
  //     })
  //   )
  //   listElements.forEach((el) => observer.observe(el))
  //   return () => observer.disconnect()
  // }, [pathname])
  return (
    <html lang="en" className={`${darkClass}`}>
      <head />
      <body className="dark:bg-gradient-star font-mono dark:text-white">
        <nav className="fixed z-10 flex w-full items-center justify-end gap-[5vw] px-10 pt-4 md:text-2xl">
          <DarkModeSwitch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
            className="h-6 w-6 md:h-8 md:w-8"
          />
          <Link href="/">
            <span className="hover:rainbow-text">Home</span>
          </Link>
          <Link href="/blog">
            <span className="hover:rainbow-text">Blog</span>
          </Link>
        </nav>
        <main className="flex flex-col overflow-hidden px-2 md:px-5">
          <Stars />
          {children}
        </main>
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
