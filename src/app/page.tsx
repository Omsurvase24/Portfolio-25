"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/button";
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
          <div>
            <p>Hi, I am Om Survase.</p>
            <h1 className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} text-5xl font-bold text-orange-500`}>
              {currText}
            </h1>
            <Button radius="full" className="bg-gradient-to-tr from-orange-300 to-orange-500 text-black shadow-lg mt-5">
              Resume
            </Button>
            <Button radius="full" className="bg-gradient-to-tr from-orange-300 to-orange-500 text-black shadow-lg mt-5 ml-2">
              Contact Info
            </Button>
            <a href="http://github.com/Omsurvase24"><img src="/github.png" alt="github" width={40} className="fill-orange-500 mt-2" /></a>
            <a href="https://www.linkedin.com/in/om-survase-812747241/"><img src="/linkedin.png" alt="github" width={40} className="fill-orange-500 mt-2" /></a>
            <a href="https://leetcode.com/omsurvase24/"><img src="/leetcode.png" alt="github" width={40} className="fill-orange-500 mt-2" /></a>
          </div>
          <div>
            <Image src="/b&w.webp" alt="Portfolio Image" width={300} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}
