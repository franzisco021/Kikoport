import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FranzPicture from "./assets/FranzPicture.png";
import Behance from "./assets/logo/behance.png";
import Facebook from "./assets/logo/facebook.png";
import Linkedin from "./assets/logo/linkedin-app-white-icon.webp";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function App() {
  const email = "franzalyssermascarenhas@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="w-full bg-neutral-950 flex items-center justify-center">
      <div className="relative w-7xl b min-h-screen px-5 flex flex-col">
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
              className={`inline-flex items-center justify-center gap-2 text-lg ml-1 font-NunitoSans min-w-38 min-h-10
    rounded-md border transition-all duration-300 
    ${
      copied
        ? "text-stone-950 border-green-500/30 bg-green-500/10"
        : "text-stone-950 bg-blue-50 border-white/50 hover:border-white"
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
              <h2 className="mb-1 text-xl uppercase tracking-widest text-white font-Bebas">
                About
              </h2>

              <p className="text-white text-md font-Rubik  text-left hyphens-auto">
                An individual who’s never fail to fulfill a task before the
                deadline and aims to learn more about the corporate world, gain
                experience and more knowledge. In return, I offer my knowledge
                on customer service, my creativity. And I’m an individual that
                value punctuality and accuracy.
              </p>
            </div>
            {/* SKILLS */}
            <div className="col-span-4 row-span-4 rounded-xl border border-white/10 bg-zinc-950 p-6">
              <h2 className="text-xl font-Bebas text-white tracking-widest mb-4">
                Relevant Experience
              </h2>

              <ul className="space-y-3">
                <li className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  {/* TITLE */}
                  <h3 className="font-Bebas text-2xl text-white">
                    IT Staff{" "}
                    <span className="text-sm font-NunitoSans-Italic text-white/70">
                      - S3 Solutions
                    </span>
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                     Built and maintained web projects using React.js and
                    Tailwind CSS, handled graphic design tasks, and provided PC
                    troubleshooting and Linux-based technical support within a
                    collaborative team environment.
                  </p>

                  {/* DATE (BOTTOM RIGHT) */}
                  <div className="mt-3 flex justify-end">
                    <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
                      Feb 2024 - July 2024
                    </span>
                  </div>
                </li>

                <li className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  {/* TITLE */}
                  <h3 className="font-Bebas text-2xl text-white">
                    Software Developer{" "}
                    <span className="text-sm font-NunitoSans-Italic text-white/70">
                      - AFP
                    </span>
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                     A collaborative team player with strong communication and
                    interpersonal skills, capable of developing functional
                    desktop applications using C# and XAML within the .NET
                    framework.
                  </p>

                  {/* DATE (BOTTOM RIGHT) */}
                  <div className="mt-3 flex justify-end">
                    <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
                      Feb 2024 - July 2024
                    </span>
                  </div>
                </li>
                
                <li className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  {/* TITLE */}
                  <h3 className="font-Bebas text-2xl text-white">
                    Freelance Multimedia Editor{" "}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    Skilled in capturing and editing high-quality photo and
                    video content for events, promotions, and social media, and
                    proficient in creating realistic apparel mockups for
                    branding and product visualization.
                  </p>

                  {/* DATE (BOTTOM RIGHT) */}
                  <div className="mt-3 flex justify-end">
                    <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
                      March 2022 - Present
                    </span>
                  </div>
                </li>

                <hr className="border-orange-600/30 my-3" />

                <h2 className="text-xl font-Bebas text-white tracking-widest mb-4">
                  Additional Experience
                </h2>

                <li className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  {/* TITLE */}
                  <h3 className="font-Bebas text-2xl text-white">
                    Part-time Store Crew{" "}
                    <span className="text-sm font-NunitoSans-Italic text-white/70">
                      – 7/11
                    </span>
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    Provided technical support, troubleshooting, and system
                    maintenance to ensure smooth daily operations.
                  </p>

                  {/* DATE (BOTTOM RIGHT) */}
                  <div className="mt-3 flex justify-end">
                    <span className="rounded bg-stone-600 px-3 py-1 text-sm font-NunitoSans text-white">
                      July 2022 – Dec 2022
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* PROJECT / FEATURE */}
            <div className="col-span-8 bg-gradient-to-br from-orange-600/20 to-transparent border border-orange-600/30 rounded-2xl p-10">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Featured Work
              </h2>
              <p className="text-white/70">
                Selected projects and case studies coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
