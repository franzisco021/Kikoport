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
import { Button } from "@headlessui/react";
import Asset1 from "./assets/images/Asset 1.svg";
import Asset2 from "./assets/images/Asset 2.svg";
import Asset3 from "./assets/images/Asset 3.svg";
import Kikoologo from "./assets/images/kikoologo.png";
import OrgPic from "./assets/images/New folder/ORG/5.jpg";
import Logo from "./assets/images/Logo.png";
import MarlinsCover from "./assets/images/New folder/MARLINS/marlinscover.jpg";
import BasCover from "./assets/images/New folder/NBA/cover.png";
import EcoCover from "./assets/images/New folder/ECOGLOW/cover.png";

import Cover from "./assets/images/New folder/OSOURCE/cover.jpg";
import Educ from "./components/educ.jsx";
import Cert from "./components/cert.jsx";
import PersonalProj from "./components/personalproj.jsx";
import Schoolorg from "./components/schoolorg.jsx";
import Osource from "./components/osrouce.jsx";
import Marlins from "./components/marlins.jsx"; 
import Basketball from "./components/basketball.jsx";
import Ecoglow from "./components/ecoglow.jsx";
import Compe from "./components/compe.jsx";
import Photog from "./components/photog.jsx";

function App() {
  const email = "franzalyssermascarenhas@gmail.com";
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [openEduc, setOpenEduc] = useState(false);
  const [openCert, setOpenCert] = useState(false);
  const [openPersonalproj, setPersonalproj] = useState(false);
  const [openSchoolorg, setSchoolorg] = useState(false);
  const [openOsource, setOsource] = useState(false);
  const [openMarlins, setMarlins] = useState(false);
  const [openBasketball, setBasketball] = useState(false);
  const [openEcoglow, setEcoglow] = useState(false);
  const [openCompe, setCompe] = useState(false);
  const [openPhotog, setphotog] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    const skillSections = [
      {
        title: "Web Development",
        color: "blue",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        title: "Graphic Design & UI/UX",
        color: "purple",
        skills: ["Photoshop", "Illustrator", "Figma", "Premiere Pro", "CapCut"],
      },
      {
        title: "Productivity Tools",
        color: "emerald",
        skills: ["Microsoft Word", "Microsoft Excel"],
      },
    ];


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
    ${copied
                  ? "bg-green-200 border-green-200 text-stone-950"
                  : "bg-white border-white/50 text-stone-950 hover:border-white"
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
                  <FaCopy className="text-base font-rubik" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-row items-start gap-1">
          <div className="grid grid-cols-8 gap-3 auto-rows-min">
            {/* ABOUT */}
            <div className="col-span-8 row-span-1 rounded-lg border border-white/10 bg-zinc-950 p-5">
              <h2 className="mb-1 text-lg uppercase tracking-widest text-white font-Bebas">
                About
              </h2>

              <p className="text-white text-sm font-Rubik  text-left hyphens-auto">
                A dedicated and detail-oriented IT graduate who consistently
                meets deadlines and values punctuality and accuracy. I am eager
                to grow in the corporate environment while applying my technical
                and creative skills. I bring strong teamwork to collaborate
                effectively with colleagues, adaptability to quickly adjust to
                new tasks, and problem-solving to tackle challenges efficiently.
                <br />
                <br />
                My technical skills include web development (building websites
                and web apps with HTML, CSS, JavaScript, and React), UI/UX
                design (creating user-friendly digital experiences), graphic
                design (visuals and posters using Photoshop and Illustrator),
                and video editing (using Premiere Pro and CapCut). I am also
                proficient in productivity tools such as Microsoft Word and
                Excel, combining technical knowledge with professional
                communication and reliability.
              </p>
            </div>
            {/* SKILLS */}
            {/* end of the skills section */}

            {/* PROJECT / FEATURE */}
            <div className="col-span-8 row-span-1 rounded-lg border border-white/10 bg-zinc-950 p-5">
              <h2 className="mb-1 text-lg uppercase tracking-widest text-white font-Bebas">
                Educational Background
              </h2>
              <div className="flex flex-row text-white text-sm font-Rubik gap-3.5 text-left hyphens-auto">
                <div className="mb-2">
                  <img
                    src={School}
                    className="h-20 w-35 rounded-lg"
                    alt="School"
                  />
                </div>
                <div className="flex flex-col justify-">
                  <h1 className=" text-lg">
                    Bachelor of Science in Information Technology{" "}
                  </h1>
                  <span className="text-white/70 text-xs">
                    First City Providential College (2020 - 2024)
                  </span>
                </div>

                <div className="flex items-end ml-auto">
                  <FaAngleRight
                    onClick={() => setOpenEduc(true)}
                    className="cursor-pointer hover:scale-110 transition"
                  />

                  <Educ
                    isOpen={openEduc}
                    onClose={() => setOpenEduc(false)}
                    title="Educational Background"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-8 row-span-1 rounded-lg border border-white/10 bg-zinc-950 p-5">
              <h2 className="mb-3 text-lg uppercase tracking-widest text-white font-Bebas">
                Certifications
              </h2>
              <div className="flex flex-column text-white text-sm font-Rubik gap-3.5 text-left hyphens-auto">
                <div className="flex flex-col gap-3.5">
                  {/* Item 1 */}
                  <div className="flex flex-c items-start gap-3 pl-3">
                    <div className="flex h-5 w-8 items-center justify-center">
                      <img
                        src={Asset2}
                        alt="OSINT Training"
                        className="h-5 w-5 object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-sm font-medium text-white">
                        Open Source Intelligence Training
                      </h1>
                      <span className="text-xs text-white/60">
                        Armed Forces of the Philippines · March 2024
                      </span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-3 pl-3">
                    <div className="flex h-5 w-8 items-center justify-center">
                      <img
                        src={Asset1}
                        alt="Introduction to Cybersecurity"
                        className="h-5 w-5 object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-sm font-medium text-white">
                        Introduction to Cybersecurity
                      </h1>
                      <span className="text-xs text-white/60">
                        CISCO Networking Academy · July 2024
                      </span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-3 pl-3">
                    <div className="flex h-5 w-8 items-center justify-center">
                      <img
                        src={Asset3}
                        alt="Civil Service Professional Eligibility"
                        className="h-5 w-5 object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-sm font-medium text-white">
                        Civil Service Professional Eligibility
                      </h1>
                      <span className="text-xs text-white/60">
                        Civil Service Commission ·June 2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-end ml-auto">
                  <FaAngleRight
                    onClick={() => setOpenCert(true)}
                    className="cursor-pointer hover:scale-110 transition"
                  />

                  <Cert
                    isOpen={openCert}
                    onClose={() => setOpenCert(false)}
                    title="Certification"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT CARD */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300">
                <h2 className="mb-3 text-lg uppercase tracking-widest text-white font-Bebas">
                  Soft Skills
                </h2>

                <div className="flex flex-wrap gap-2 text-[12px] font-Rubik leading-none">
                  {[
                    "Team Player",
                    "Adaptable",
                    "Resilient",
                    "Strong Work Ethic",
                    "Time Management",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* RIGHT CARD */}
              <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-zinc-950 p-6">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                      Technical Skills
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[12px] font-Rubik leading-none">
                    {[
                      "Photoshop",
                      "Illustrator",
                      "Figma",
                      "Premiere Pro",
                      "CapCut",
                      "Microsoft Word",
                      "Microsoft Excel",
                      "Microsoft Powerpoint",
                      "React",
                      "HTML",
                      "CSS",
                      "JS",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 text-[12px] font-Rubik leading-none"></div>

                  <div className="flex flex-col gap-4 text-sm font-Rubik">
                    {/* Duplicate same items here */}
                  </div>
                </div>
              </div>

              <Cert
                isOpen={openCert}
                onClose={() => setOpenCert(false)}
                title="Certification"
              />
            </div>
          </div>
          {/*  this is the end of grid */}

          <div className=" flex justify-center my-10"></div>

          <div className="w-[760px] rounded-xl border border-white/10 bg-zinc-950 p-6">
            <h2 className="text-sm font-Bebas text-white tracking-widest mb-4">
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
                  <h3 className="font-Bebas text-sm text-white flex  items-center justify-between">
                    IT Staff
                  </h3>
                  <span className="text-xs font-Rubik text-white/70 rounded px-1 py-1">
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
                  <p className="text-xs text-white/70 leading-relaxed">
                    Built and maintained web projects using React.js and
                    Tailwind CSS, handled graphic design tasks, and provided PC
                    troubleshooting and Linux-based technical support within a
                    collaborative team environment.
                  </p>

                  {/* DATE */}
                  <div className="mt-3 flex justify-end">
                    <span className="rounded bg-stone-600 px-3 py-1 text-xs font-NunitoSans text-white">
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
                  <h3 className="font-Bebas text-sm text-white flex  items-center justify-between">
                    Software Developer - OJT
                  </h3>
                  <span className="text-xs font-Rubik text-white/70 rounded px-1 py-1">
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
                  <p className="text-xs text-white/70 leading-relaxed">
                    A collaborative team player with strong communication and
                    interpersonal skills, capable of developing functional
                    desktop applications using C# and XAML within the .NET
                    framework.
                  </p>

                  {/* DATE */}
                  <div className="mt-3 flex justify-end">
                    <span className="rounded bg-stone-600 px-3 py-1 text-xs font-NunitoSans text-white">
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
                  <h3 className="font-Bebas text-sm text-white flex  items-center justify-between">
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
                  <p className="text-xs text-white/70 leading-relaxed">
                    Experienced in creating high-quality visual content,
                    including photo and video production, efficient
                    post-editing, and realistic apparel mockups for branding,
                    promotion, and digital presentation.
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

              <h2 className="text-sm font-Bebas text-white tracking-widest mb-4">
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
                  <h3 className="font-Bebas text-sm text-white flex  items-center justify-between">
                    Part-time Store Crew
                  </h3>
                  <span className="text-xs font-Rubik text-white/70 rounded px-1 py-1">
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
                  <p className="text-xs text-white/70 leading-relaxed">
                    Customer-focused retail associate with experience in
                    point-of-sale operations, food equipment maintenance, and
                    efficient workflow management in a fast-paced environment.
                  </p>

                  {/* DATE */}
                  <div className="mt-3 flex justify-end">
                    <span className="rounded bg-stone-600 px-3 py-1 text-xs font-NunitoSans text-white">
                      July 2022 - December 2022
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-orange-600/30 my-3" />

        <div className="gap-4 pt-1">
          <div className="flex flex-row justify-center-safe text-5xl text-white pb-5 h-16 opacity-35">
            <h1>My Projects </h1>
          </div>
          <div className="grid grid-cols-8 auto-rows-auto gap-3 py-1 w-full h-full">
            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              <div className="w-full h-40 overflow-hidden rounded-2xl ">
                <img
                  src={Kikoologo}
                  alt="Kikoo Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  Personal Branding Project 
                </h2>

                <FaAngleRight
                  onClick={() => setPersonalproj(true)}
                  className="text-white cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </div>

              <PersonalProj
                isOpen={openPersonalproj}
                onClose={() => setPersonalproj(false)}
                title="Personal Project"
              />
            </div>

            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              {/* Image on top */}
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <img
                  src={OrgPic}
                  alt="ORGPIC"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  School Organization
                </h2>

                <FaAngleRight
                  onClick={() => setSchoolorg(true)}
                  className="text-white cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </div>

              <Schoolorg
                isOpen={openSchoolorg}
                onClose={() => setSchoolorg(false)}
                title="School Organization"
              />
            </div>

            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              {/* Image on top */}
              <div className="w-full h-40 overflow-hidden rounded-2xl opacity-70">
                <img
                  src={Cover}
                  alt="CoverOsource"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  O'Source Clothing Line
                </h2>

                <FaAngleRight   onClick={() => setOsource(true)} className="text-white cursor-pointer hover:scale-110 transition-transform duration-300" />
              </div>

              <Osource
                isOpen={openOsource}
                onClose={() => setOsource(false)}
                title="Original Source Clothing Line"
              />


            </div>

            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              {/* Image on top */}
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <img
                  src={MarlinsCover}
                  alt="Project Image"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  Marlins Basketball 
                </h2>

                <FaAngleRight 
                onClick={() => setMarlins(true)}
                 className="text-white cursor-pointer hover:scale-110 transition-transform duration-300" />
              </div>
              
               <Marlins
                isOpen={openMarlins}
                onClose={() => setMarlins(false)}
                title="Marlins Basketball"
              />
            </div>

            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              {/* Image on top */}
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <img
                  src={BasCover}
                  alt="Basketball Cover"
                  className="w-full h-full object-cover opacity-40 "
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  Basketball Project
                </h2>

                <FaAngleRight 
                onClick={() => setBasketball(true)}
                 className="text-white cursor-pointer hover:scale-110 transition-transform duration-300" />
              </div>
              
               <Basketball
                isOpen={openBasketball}
                onClose={() => setBasketball(false)}
                title="Basketball Project"
              />
            </div>

            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              {/* Image on top */}
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <img
                  src={EcoCover}
                  alt="Kikoo Logo"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  Ecoglow
                </h2>

                <FaAngleRight 
                onClick={() => setEcoglow(true)}
                 className="text-white cursor-pointer hover:scale-110 transition-transform duration-300" />
              </div>
              
               <Ecoglow
                isOpen={openEcoglow}
                onClose={() => setEcoglow(false)}
                title="Ecoglow"
              />
            </div>

            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              {/* Image on top */}
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <img
                  src="Kikoologo"
                  alt="Kikoo Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  Competition Entry
                </h2>

              <FaAngleRight 
                onClick={() => setCompe(true)}
                 className="text-white cursor-pointer hover:scale-110 transition-transform duration-300" />
              </div>
              
               <Compe
                isOpen={openCompe}
                onClose={() => setCompe(false)}
                title="DLTK Entry"
              />
            </div>
            <div className="col-span-4 row-span-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition-colors duration-300 flex flex-col overflow-hidden shadow-lg">
              {/* Image on top */}
              <div className="w-full h-40 overflow-hidden rounded-2xl">
                <img
                  src="Kikoologo"
                  alt="Kikoo Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title and arrow below */}
              <div className="flex items-center justify-between mt-4">
                <h2 className="text-lg uppercase tracking-widest text-white font-Bebas">
                  Random Photography
                </h2>

              <FaAngleRight 
                onClick={() => setphotog(true)}
                 className="text-white cursor-pointer hover:scale-110 transition-transform duration-300" />
              </div>
              
               <Photog
                isOpen={openPhotog}
                onClose={() => setPhotog(false)}
                title="DLTK Entry"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-neutral-800 h-12 "></footer>
    </div>
  );
}

export default App;
