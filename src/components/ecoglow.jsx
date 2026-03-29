import React from "react";
import { MdCancel } from "react-icons/md";
import cover from "../assets/images/New folder/ECOGLOW/cover.png";
import eco1 from "../assets/images/New folder/ECOGLOW/1.png";
import eco2 from "../assets/images/New folder/ECOGLOW/2.png";
import eco3 from "../assets/images/New folder/ECOGLOW/3.png";
import eco4 from "../assets/images/New folder/ECOGLOW/4.png";
import eco5 from "../assets/images/New folder/ECOGLOW/5.png";
import eco6 from "../assets/images/New folder/ECOGLOW/6.png";
import eco7 from "../assets/images/New folder/ECOGLOW/7.png";
import eco8 from "../assets/images/New folder/ECOGLOW/8.png";
import eco9 from "../assets/images/New folder/ECOGLOW/9.png";

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
          <img
            src={cover}
            alt="mockup"
            className="w-full rounded-md object-cover h-80 opacity-50"
          />
        </div>

        <div className="grid grid-cols-3 auto-rows-[200px] gap-4 mx-4 pt-4 ">
          {[eco1, eco2, eco3, eco4, eco5, eco6, eco7, eco8, eco9].map((img, index) => (
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
  );
};

export default marlins;
