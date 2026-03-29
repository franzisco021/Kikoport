import React from "react";
import { MdCancel } from "react-icons/md";
import cover from "../assets/images/New folder/NBA/cover.png";
import ball2 from "../assets/images/New folder/NBA/2.png";
import ball3 from "../assets/images/New folder/NBA/3.jpg";
import ball4 from "../assets/images/New folder/NBA/4.jpg";
import ball5 from "../assets/images/New folder/NBA/5.jpg";
import ball6 from "../assets/images/New folder/NBA/6.jpg";
import ball7 from "../assets/images/New folder/NBA/7.jpg";
import ball8 from "../assets/images/New folder/NBA/8.jpg";
import score1 from "../assets/images/New folder/NBA/SCORE1.png";
import score2 from "../assets/images/New folder/NBA/SCORE2.png";
import score3 from "../assets/images/New folder/NBA/SCORE3.jpg";
import score4 from "../assets/images/New folder/NBA/SCORE4.png";
import cover1 from "../assets/images/New folder/NBA/cover1.png";
import cover2 from "../assets/images/New folder/NBA/cover2.png";


const marlins = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-y-auto bg-neutral-950 border border-white/10 shadow-2xl scroll-smooth">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-neutral-950/95 backdrop-blur-md flex justify-between items-center px-5 py-5 border-b border-white/10">
          <h2 className="text-4xl font-Bebas tracking-widest text-white">
            {title}
          </h2>

          <MdCancel
            onClick={onClose}
            className="cursor-pointer text-white/70 hover:text-red-400 transition text-3xl"
          />
        </div>

        <div>
          <div className="w-full max-w-5xl text-white pb-5 mx-auto text-center">
            <img
              src={cover}
              alt="mockup"
              className="w-full rounded-md object-cover h-80 opacity-50"
            />

            <h6 className="italic mt-3 opacity-50 max-w-3xl mx-auto">
              As a basketball fan, I still wanted to bring my passion into this industry, and this is one of my sample works. I focus on creating strong, consistent branding that connects with the identity of the team or project I’m working on
            </h6>
          </div>
          <div className="py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 justify-center ">

              <div className="grid grid-row-2 sm:grid-cols-2 gap-4 pb-4">
                {[ball2, ball3, ball4, ball6, cover1, cover2].map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-md group"
                  >
                    <img
                      src={img}
                      alt={`mockup-${index}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-row-2 sm:grid-cols-2 gap-4 pb-4">
                {[ball5, ball7].map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-md group"
                  >
                    <img
                      src={img}
                      alt={`mockup-${index}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-row-2 sm:grid-cols-2 gap-4">
                {[score1, score2, score3, score4].map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-md group"
                  >
                    <img
                      src={img}
                      alt={`mockup-${index}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default marlins;
