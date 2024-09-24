import './globals.css'
import { Inter } from 'next/font/google'
import VanGoghClouds from '@/components/van-gogh-clouds';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '梦境解析',
  description: '使用 AI 解析你的梦境',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <VanGoghClouds />
        {children}
      </body>
    </html>
  )
}
