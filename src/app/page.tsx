"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [currText, setCurrText] = useState("Freelancer");
  const texts = ["Freelancer", "Backend Developer", "Full Stack Developer"];
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrText((prevText) => {
          const currIndex = texts.indexOf(prevText);
          const nextIndex = (currIndex + 1) % texts.length;
          return texts[nextIndex];
        });
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-between ml-20 mr-20">
          <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <p>Hi, I am Om Survase.</p>
            <h1 className="text-5xl font-bold text-orange-500">
              {currText}
            </h1>
          </div>
          <div>
            <Image src="/b&w.webp" alt="Portfolio Image" width={300} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}
