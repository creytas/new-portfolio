'use client'
import { useState } from "react"
import About from "@/components/About"
import HeaderBar from "@/components/Header";

export default function Home() {
  const [isLight, setIsLight] = useState(true)
  return (
    <main className={`${isLight? "bg-white bg-opacity-90 text-black" : "bg-navy text-white"} flex min-h-screen flex-col items-center justify-between pb-24 px-24 text-black`}>
      <HeaderBar isLight={isLight} setIsLight={setIsLight} />
      <About isLight={isLight}/>
    </main>
  );
}
