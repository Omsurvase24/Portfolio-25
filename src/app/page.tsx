"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p>This is the homepage content.</p>
      </div>
    </>
  );
}
