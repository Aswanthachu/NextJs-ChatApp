import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils';

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={cn(font.className,"h-full")}>{children}</body>
      </ClerkProvider>
    </html>
  )
}
