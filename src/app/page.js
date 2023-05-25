'use client'

import About
 from "@/components/About";
export default function Home() {
  return (
    <main className="bg-white bg-opacity-90 flex min-h-screen flex-col items-center justify-between pb-24 px-24 text-black">
      <About/>
    </main>
  );
}
