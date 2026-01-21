import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FranzPicture from "./assets/FranzPicture.png";
import School from "./assets/images/fcpc.jpg";
import Behance from "./assets/logo/behance.png";
import Facebook from "./assets/logo/facebook.png";
import Linkedin from "./assets/logo/linkedin-app-white-icon.webp";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Button } from '@headlessui/react'
import Educ from "./components/educ.jsx";


function App() {
  const email = "franzalyssermascarenhas@gmail.com";
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [openEduc, setOpenEduc] = useState(false);


  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="w-full bg-neutral-950  min-h-screen">
      <div className="relative px-5 w-full max-w-5xl mx-auto flex flex-col">
        <div className="flex items-center justify-start gap-3 h-56">
          <a>
            <img
              src={FranzPicture}
              className="h-35 w-35 rounded-xl transition-transform duration-1000"
              alt="Author Picture"
            />
          </a>

          <div className="ml-4">
            <h1 className="text-7xl font-Bebas text-white">
              Franz Mascarenhas
            </h1>
            <h3 className="text-xl font-NunitoSans text-white">
              Graphic Designer / Web Development / IT Staff
            </h3>
          </div>

          <div className="ml-auto flex flex-col items-center gap-4">
            <div className="text-white flex  items-center gap-3">
              <a
                href="https://www.behance.net/franzmascare"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Behance}
                  className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  alt="Vite Logo"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100070110692426"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Facebook}
                  className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  alt="React Logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/franz-alysser-mascarenhas-4a18a8240/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Linkedin}
                  className="h-9 w-9 hover:scale-110 transition-transform duration-300"
                  alt="React Logo"
                />
              </a>
            </div>

           <button
  onClick={handleCopy}
  className={`
    inline-flex items-center justify-center gap-2 text-lg ml-1 font-NunitoSans
    min-w-[9.5rem] min-h-[2.5rem] rounded-md border
    transition-colors duration-300 ease-in-out
    ${
      copied
        ? "bg-green-200 border-green-200 text-stone-950"
        : "bg-blue-50 border-white/50 text-stone-950 hover:border-white"
    }
  `}
>
  {copied ? (
    <>
      <FaCheck className="text-base" />
      <span>Copied</span>
    </>
  ) : (
    <>
      <FaCopy className="text-base" />
      <span>Copy Email</span>
    </>
  )}
</button>

          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-12 gap-3 py-1 auto-rows-min">

            {/* ABOUT */}
            <div className="col-span-8 row-span-1 rounded-lg border border-white/10 bg-zinc-950 p-5">
              <h2 className="mb-1 text-lg uppercase tracking-widest text-white font-Bebas">
                About
              </h2>

              <p className="text-white text-sm font-Rubik  text-left hyphens-auto">
                An individual who’s never fail to fulfill a task before the
                deadline and aims to learn more about the corporate world, gain
                experience and more knowledge. In return, I offer my knowledge
                on customer service, my creativity. And I’m an individual that
                value punctuality and accuracy.
              </p>
            </div>
            {/* SKILLS */}
            <div className="col-span-4 row-span-4 rounded-xl border border-white/10 bg-zinc-950 p-6">
                     <h2 className="text-lg font-Bebas text-white tracking-widest mb-4">
                Relevant Experience
              </h2>

              <ul className="space-y-3">
  
                <li
      onClick={() => setOpen(!open)}
      className="
        cursor-pointer
        rounded-lg
        border border-white/10
        bg-white/5
        p-4
        transition
        hover:bg-white/10
      "
    >
      {/* TITLE */}
      <div className="flex justify-between">
          <h3 className="font-Bebas text-xl text-white flex  items-center justify-between">
        IT Staff 
      </h3>
      <span className="text-xs font-Rubik text-white rounded px-1 py-1">
          S3 Solutions
        </span>
      </div>
    

      {/* EXPANDABLE CONTENT */}
      <div
        className={`
          overflow-hidden
          transition-opacity
          duration-initial
          ease-in-out
          ${open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        {/* DESCRIPTION */}
        <p className="text-sm text-white/70 leading-relaxed">
          Built and maintained web projects using React.js and Tailwind CSS,
          handled graphic design tasks, and provided PC troubleshooting and
          Linux-based technical support within a collaborative team environment.
        </p>

        {/* DATE */}
        <div className="mt-3 flex justify-end">
          <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
            Aug 2024 - Feb 2026
          </span>
        </div>
      </div>
    </li>



    <li
      onClick={() => setOpen2(!open2)}
      className="
        cursor-pointer
        rounded-lg
        border border-white/10
        bg-white/5
        p-4
        transition
        hover:bg-white/10
      "
    >
      
      <div className="flex justify-between">
          <h3 className="font-Bebas text-xl text-white flex  items-center justify-between">
        Software Developer - OJT
      </h3>
      <span className="text-xs font-Rubik text-white rounded px-1 py-1">
          AFP
        </span>
      </div>

      {/* EXPANDABLE CONTENT */}
      <div
        className={`
          overflow-hidden
          transition-opacity
          duration-initial
          ease-in-out
          ${open2 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        {/* DESCRIPTION */}
        <p className="text-sm text-white/70 leading-relaxed">
         A collaborative team player with strong communication and
                    interpersonal skills, capable of developing functional
                    desktop applications using C# and XAML within the .NET
                    framework.
        </p>

        {/* DATE */}
        <div className="mt-3 flex justify-end">
          <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
           Feb 2024 - July 2024
          </span>
        </div>
      </div>
    </li>


<li
      onClick={() => setOpen3(!open3)}
      className="
        cursor-pointer
        rounded-lg
        border border-white/10
        bg-white/5
        p-4
        transition
        hover:bg-white/10
      "
    >
      {/* TITLE */}
     <div className="flex justify-between">
          <h3 className="font-Bebas text-lg text-white flex  items-center justify-between">
        Freelance Multimedia Editor
      </h3>
      </div>

      {/* EXPANDABLE CONTENT */}
      <div
        className={`
          overflow-hidden
          transition-opacity
          duration-initial
          ease-in-out
          ${open3 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        {/* DESCRIPTION */}
        <p className="text-sm text-white/70 leading-relaxed">
          Built and maintained web projects using React.js and Tailwind CSS,
          handled graphic design tasks, and provided PC troubleshooting and
          Linux-based technical support within a collaborative team environment.
        </p>

        {/* DATE */}
        <div className="mt-3 flex justify-end">
          <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
           July 2023 - Present
          </span>
        </div>
      </div>
    </li>


                <hr className="border-orange-600/30 my-3" />

                <h2 className="text-xl font-Bebas text-white tracking-widest mb-4">
                  Additional Experience
                </h2>           
<li
      onClick={() => setOpen4(!open4)}
      className="
        cursor-pointer
        rounded-lg
        border border-white/10
        bg-white/5
        p-4
        transition
        hover:bg-white/10
      "
    >
      {/* TITLE */}
     <div className="flex justify-between">
          <h3 className="font-Bebas text-xl text-white flex  items-center justify-between">
        Part-time Store Crew
      </h3>
      <span className="text-xs font-Rubik text-white rounded px-1 py-1">
           7/11
        </span>
      </div>

      {/* EXPANDABLE CONTENT */}
      <div
        className={`
          overflow-hidden
          transition-opacity
          duration-initial
          ease-in-out
          ${open4 ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        {/* DESCRIPTION */}
        <p className="text-sm text-white/70 leading-relaxed">
          Built and maintained web projects using React.js and Tailwind CSS,
          handled graphic design tasks, and provided PC troubleshooting and
          Linux-based technical support within a collaborative team environment.
        </p>

        {/* DATE */}
        <div className="mt-3 flex justify-end">
          <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
            July 2022 - December 2022
          </span>
        </div>
      </div>
    </li>
                
              </ul>
            </div>

            {/* PROJECT / FEATURE */}
            <div className="col-span-8 row-span-1 rounded-lg border border-white/10 bg-zinc-950 p-5">
              <h2 className="mb-1 text-lg uppercase tracking-widest text-white font-Bebas">
                Educational Background
              </h2>
              <div className="flex flex-row text-white text-sm font-Rubik gap-3.5 text-left hyphens-auto">
                <div className="mb-2">
                  <img src={School} className="h-20 w-35 rounded-lg"
                   alt="School" />

                </div>
                <div className="flex flex-col justify-">  
                  <h1 className=" text-lg">Bachelor of Science in Information Technology </h1>
                    <span className="text-white/70 text-xs">First City Providential College (2020 - 2024)</span>
                  
                  </div>

                  <div className="flex items-end ml-auto">
                    <FaAngleRight
  onClick={() => setOpenEduc(true)}
  className="cursor-pointer hover:scale-110 transition"
/>

<Educ
isOpen={openEduc}
 onClose={() => setOpenEduc(false)}
        title="Educational Background"/>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
