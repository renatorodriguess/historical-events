'use client'

import MapApp from "./components/MapApp"
import dynamic from "next/dynamic"

const Map = dynamic(() =>import('./components/MapApp'), { ssr: false })

export default function Home() {
  return (
   <main className="w-full h-full">
      <MapApp />
   </main>
  )
}

