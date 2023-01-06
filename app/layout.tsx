import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="grid min-h-screen grid-rows-[52px_1fr]">
        <nav className="flex justify-end gap-20 bg-slate-500 p-3 text-xl">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
