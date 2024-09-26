"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between ml-20 mr-20">
          <div>
            <h1 className="text-3xl font-bold text-orange-500">
              Welcome to My Portfolio
            </h1>
            <p>This is the homepage content.</p>
          </div>
          <div>
            <Image src="/b&w.webp" alt="Portfolio Image" width={300} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}
