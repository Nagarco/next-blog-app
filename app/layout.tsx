import type { Metadata } from 'next'
import './globals.css'
import ProfilePic from './components/ProfilePic'
import Navbar from './components/NavBar/Navbar'


export const metadata: Metadata = {
  title: "Omar's Blog",
  description: 'Next JS Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark: bg-slate-800">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
