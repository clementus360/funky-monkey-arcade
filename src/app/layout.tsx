import type { Metadata } from 'next'

import { Play } from 'next/font/google'
import localFont from "next/font/local"

import './globals.css'

import Header from './Header'
import Footer from './Footer'

const play = Play({
  weight: ["400", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-play'
})

const gilroy = localFont({
  src: [
    {
      path:'../assets/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path:'../assets/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-gilroy'
})

export const metadata: Metadata = {
  title: 'eGamers.rw - Funky Monkey Arcade in Mundi Center Rwandex,',
  keywords: 'eGamers, Funky Monkey Arcade, arcade games, entertainment, Mundi Center Rwandex, Rwanda',
  description: "Welcome to eGamers.rw! Explore the ultimate gaming experience at Funky Monkey Arcade, located in Mundi Center Rwandex, Rwanda. Enjoy a wide range of arcade games and entertainment for all ages. Join us for a fun-filled adventure in the heart of Rwanda's gaming scene.",
  openGraph: {
    title: 'eGamers.rw - Funky Monkey Arcade in Mundi Center Rwandex,',
    description: "Welcome to eGamers.rw! Explore the ultimate gaming experience at Funky Monkey Arcade, located in Mundi Center Rwandex, Rwanda. Enjoy a wide range of arcade games and entertainment for all ages. Join us for a fun-filled adventure in the heart of Rwanda's gaming scene.",
    url: 'https://www.egamers.rw',
    siteName: 'eGamers',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/gaming-906ed.appspot.com/o/image.jpg?alt=media&token=04f8cca6-e7bb-4e30-8249-f4d89140ccdf',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: "https://egamers.rw/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${play.variable} ${gilroy.variable} bg-dark bg-cover`}>
      <body className='font-text'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
