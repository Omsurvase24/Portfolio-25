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
            <Button radius="full" className="bg-gradient-to-tr from-orange-300 to-orange-500 text-black shadow-lg mt-5 font-bold">
              Resume
            </Button>
            <Button radius="full" className="bg-gradient-to-tr from-orange-300 to-orange-500 text-black shadow-lg mt-5 ml-2 font-bold">
              Contact Info
            </Button>
            <a href="http://github.com/Omsurvase24"><img src="/github.png" alt="github" width={40} className="mt-2" /></a>
            <a href="https://www.linkedin.com/in/om-survase-812747241/"><img src="/linkedin.png" alt="github" width={40} className="mt-2" /></a>
            <a href="https://leetcode.com/omsurvase24/"><img src="/leetcode.png" alt="github" width={40} className="mt-2" /></a>
          </div>
          <div>
            <Image src="/b&w.webp" alt="Portfolio Image" width={300} height={300} />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">About Me</h1>
          <div className="flex justify-center">
            <img src="https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif" alt="mario" width={400} />
          </div>
          <p className="mt-5">
            Hello, I am a passionate backend developer with penchant for Python and Django. What sets me apart from my batchmates is that along with my technical expertise, I also have a foundation in leading teams and volunteering for events. I have worked as a data science intern for a few months adding to my interest for Python. I am very curious as a person so you will always find me exploring something, may it be a new tech stack or places. I believe that collaboration and continuous learning are the cornerstones of growth, and I'm always eager to connect with like-minded individuals who share my passion for innovation.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-10 text-center flex flex-nowrap flex-col gap-6 justify-center items-center">
        <h1 className="text-5xl font-bold mb-5">Skills</h1>
        <div className="flex-wrap flex gap-6 justify-center items-center mb-3">
          <img src="/icons8-nextjs-144.png" alt="Next.js" width={100} />
          <img src="/Go-Logo_White.png" alt="Golang" width={150} />
          <img src="/icons8-django-256.png" alt="Django" width={100} />
          <img src="/icons8-nodejs-256.png" alt="Node.js" width={100} />
        </div>
        <div className="flex-wrap flex gap-6 justify-center items-center mb-3">
          <img src="/icons8-javascript-250.png" alt="JavaScript" width={100} />
          <img src="/icons8-python-240.png" alt="Python" width={100} />
          <img src="/cpp.png" alt="Cpp" width={100} />
          <img src="/typescript.png" alt="Typescript" width={100} />
        </div>
        <div className="flex-wrap flex gap-6 justify-center items-center">
          <img src="/icons8-react-240.png" alt="React" width={100} />
          <img src="/icons8-postgresql-250.png" alt="Postgresql" width={100} />
          <img src="/icons8-mysql-250.png" alt="MySQL" width={100} />
          <img src="/icons8-git-250.png" alt="Git" width={100} />
        </div>
      </div>
    </>
  );
}
