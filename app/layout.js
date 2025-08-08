export const metadata = {
  title: "Next.js 15 App Router",
  description: "Simple Next.js 15 App Router project with Tailwind",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}

import "./globals.css"
