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
      <div className="container mx-auto p-10 text-center flex flex-nowrap flex-col gap-10 justify-center items-center">
        <h1 className="text-5xl font-bold mb-5 text-orange-500">Skills</h1>
        <div className="flex-wrap flex gap-6 justify-center items-center mb-3">
          <img src="/icons8-nextjs-144.png" alt="Next.js" width={100} />
          <img src="/Go-Logo_White.png" alt="Golang" width={150} />
          <img src="/icons8-django-256.png" alt="Django" width={100} />
          <img src="/icons8-nodejs-256.png" alt="Node.js" width={100} />
          <img src="/icons8-javascript-250.png" alt="JavaScript" width={100} />
          <img src="/icons8-python-240.png" alt="Python" width={100} />
        </div>
        <div className="flex-wrap flex gap-10 justify-center items-center">
          <img src="/cpp.png" alt="Cpp" width={100} />
          <img src="/typescript.png" alt="Typescript" width={100} />
          <img src="/icons8-react-240.png" alt="React" width={100} />
          <img src="/icons8-postgresql-250.png" alt="Postgresql" width={100} />
          <img src="/icons8-mysql-250.png" alt="MySQL" width={100} />
          <img src="/icons8-git-250.png" alt="Git" width={100} />
        </div>
      </div>
      <div className="container mx-auto p-10">
        <h1 className="text-5xl font-bold mb-5 text-center">Work</h1>
        <div className="bg-slate-900 p-2 rounded-xl">
          <div className="m-8">
            <div className="container mx-auto flex justify-between items-center mb-10">
              <div>
                <h1 className="text-4xl font-bold text-orange-500">Freelance</h1>
                <p>Backend Developer</p>
              </div>
              <p>Remote • July - Present</p>
            </div>
            <p className="mb-2">• Developing and deploying a scalable community website where pet lovers connect, collaborate, share, and discover.</p>
            <p className="mb-2">• Wrote more than 50 APIs and created the backend for a community website with features such as messaging, groups, event management, job postings, and much more.</p>
            <p>• Used Next.js to effectively write serverless functions as well as used Node.js for the other robust backend.</p>
          </div>
        </div>
        <br />
        <div className="bg-slate-900 p-2 rounded-xl">
          <div className="m-8">
            <div className="container mx-auto flex justify-between items-center mb-10">
              <div>
                <h1 className="text-4xl font-bold text-orange-500">Ahen</h1>
                <p>Data Science Intern</p>
              </div>
              <p>Remote, Pune • Jan - Apr</p>
            </div>
            <p className="mb-2">• Developed more than 3 chatbots leveraging Python and various natural language processing models which would help the company to save time and resources.</p>
            <p className="mb-2">• For the final project, created an innovative driving lesson chatbot keeping in mind the customer needs using FastAPI and Google Dialogflow, enhancing user interaction and learning efficiency.</p>
            <p>• Gained hands-on experience with databases like SQLite and MySQL, optimizing data management, performance and retrieval processes.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-10">
        <h1 className="text-5xl font-bold mb-10 text-center">Projects</h1>
        <div className="flex justify-center items-center w-full">
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col px-4 py-6 justify-between bg-slate-900 rounded-xl">
              <div className="flex justify-between items-center w-full mb-2">
                <div className="flex justify-start items-center">
                  <h1 className="mb-3 text-xl">DevStream</h1>
                </div>
                <div className="flex justify-center items-center mb-3">
                  <a href="https://github.com/Omsurvase24/DevStream"><img src="/github.png" alt="DevStream" width={30} /></a>
                </div>
              </div>
              <div className="mb-5">
                <h3>A live streaming platform but for developers or people in tech.</h3>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-orange-500">• NextJS, TypeScript, MySQL, Tailwind</p>
              </div>
            </div>
            <div className="flex flex-col px-4 py-6 justify-between bg-slate-900 rounded-xl">
              <div className="flex justify-between items-center w-full mb-2">
                <div className="flex justify-start items-center">
                  <h1 className="mb-3 text-xl">React Wordle</h1>
                </div>
                <div className="flex justify-center items-center mb-3">
                  <a href="https://github.com/Omsurvase24/React-Wordle"><img src="/github.png" alt="React Wordle" width={30} /></a>
                </div>
              </div>
              <div className="mb-5">
                <h3>An addicting game where people have to find the right word in 5 attempts.</h3>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-orange-500">• ReactJS, HTML, CSS</p>
              </div>
            </div>
            <div className="flex flex-col px-4 py-6 justify-between bg-slate-900 rounded-xl">
              <div className="flex justify-between items-center w-full mb-2">
                <div className="flex justify-start items-center">
                  <h1 className="mb-3 text-xl">Ignite Validation</h1>
                </div>
                <div className="flex justify-center items-center mb-3">
                  <a href="https://github.com/Omsurvase24/Ignite-Validation"><img src="/github.png" alt="Ignite-Validation" width={30} /></a>
                </div>
              </div>
              <div className="mb-5">
                <h3>A backend that fetches student registeration data for my college hackathon.</h3>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-orange-500">• Django, SQLite</p>
              </div>
            </div>
            <div className="flex flex-col px-4 py-6 justify-between bg-slate-900 rounded-xl">
              <div className="flex justify-between items-center w-full mb-2">
                <div className="flex justify-start items-center">
                  <h1 className="mb-3 text-xl">Gym Management System</h1>
                </div>
                <div className="flex justify-center items-center mb-3">
                  <a href="https://github.com/Omsurvase24/Gym-Management-System"><img src="/github.png" alt="Gym Management System" width={30} /></a>
                </div>
              </div>
              <div className="mb-5">
                <h3>A comprehensive gym management system with payment integration, real time messaging and notification features.</h3>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-orange-500">• Django, Razorpay, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
