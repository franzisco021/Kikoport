import React from "react";
import { MdCancel } from "react-icons/md";
import college1 from "../assets/images/college1.jpg";
import college2 from "../assets/images/college2.jpg";
import college3 from "../assets/images/college3.jpg";
import college4 from "../assets/images/college4.jpg";

const Educ = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl rounded-2xl bg-neutral-950 border border-white/10 p-8 shadow-2xl">
        {/* Close */}
        <MdCancel
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer text-white/70 hover:text-red-400 transition"
        />

        {/* Title */}
        <h2 className="mb-6 text-2xl font-Bebas tracking-widest text-white">
          {title}
        </h2>

        {/* Content Card */}
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
        
          <h3 className="text-lg font-semibold text-white">
            Bachelor of Science in Information Technology
          </h3>

      
          <p className="mt-1 text-sm text-white/60">
            First City Providential College · 2020 – 2024
          </p>

    
          <div className="my-5 h-px bg-white/10" />

         
          <p className="mb-3 text-xs uppercase tracking-widest text-white/50">
            Relevant Coursework
          </p>

          <ul className="grid grid-cols-2 gap-y-2 text-sm text-white/80 list-disc list-inside">
            <li>Web Development</li>
            <li>Database Management</li>
            <li>Network Security</li>
            <li>Mobile App Development</li>
          </ul>

         
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
         
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={college1}
                alt="College campus"
                className="w-full h-56 object-cover transition-transform duration-700 hover:scale-101"
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={college2}
                alt="College activity"
                className="w-full h-56 object-cover transition-transform duration-700 hover:scale-101"
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={college3}
                alt="College activity"
                className="w-full h-56 object-cover transition-transform duration-700 hover:scale-101"
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={college4}
                alt="College activity"
                className="w-full h-56 object-cover transition-transform duration-700 hover:scale-101"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educ;
