'use client'
import { useState } from "react"
import Landing from "@/components/Landing"
import HeaderBar from "@/components/Header";
import FooterBar from "@/components/Footer";

export default function Home() {
  const [isLight, setIsLight] = useState(true)
  return (
    <main className={`${isLight? "bg-white bg-opacity-90 text-black" : "bg-navy text-white"} flex min-h-screen flex-col items-center justify-between px-24 text-black`}>
      <HeaderBar isLight={isLight} setIsLight={setIsLight} />
      <Landing isLight={isLight}/>
      <FooterBar/>
    </main>
  );
}
