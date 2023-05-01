
import Image from 'next/image'
import { Inter } from 'next/font/google'
import DayList from '@/components/DayList'
import Calender from '@/components/Calender'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center flex-col justify-between font-mono text-sm flex lg:flex-row gap-6">
        <DayList/>
        <Calender/>
      </div>
    </main>
  )
}
