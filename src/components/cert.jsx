import React from "react";
import { MdCancel } from "react-icons/md";
import osint from "../assets/images/osint.png";
import cse from "../assets/images/cse.png";
import cisco from "../assets/images/cisco.png";

const Cert = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-neutral-950 border border-white/10 p-8 shadow-2xl">
        {/* Close */}
        <MdCancel
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer text-white/70 hover:text-red-400 transition"
        />

        <h2 className="mb-6 text-2xl font-Bebas tracking-widest text-white">
          {title}
        </h2>
<div className="flex items-center">
  
  <div className="flex h-50 w-70 items-center justify-center  bg-white/5 p-3">
    <img
      src={osint}
      alt="OSINT Certificate"
      className="h-full w-full object-contain"
    />
  </div>
  <div className="flex h-[200px] w-[320px] items-center rounded-r-md bg-zinc-900/60 px-5">
  <div className="flex flex-col">
    <h1 className="text-xl font-medium text-white leading-tight">
      Open Source Intelligence Training
    </h1>
    <span className="mt-1 text-xs text-white/60">
      Armed Forces of the Philippines · March 2024
    </span>
    <p className="mt-3 text-xs text-white/80">
      A comprehensive training program focused on gathering and analyzing publicly available information.
    </p>
  </div>
</div>

        </div>
        <div className="flex items-center">
  
  <div className="flex h-50 w-70 items-center justify-center  bg-white/5 p-3">
    <img
      src={cse}
      alt="OSINT Certificate"
      className="h-full w-full object-contain"
    />
  </div>
  <div className="flex h-[200px] w-[320px] items-center rounded-r-md bg-zinc-900/60 px-5">
  <div className="flex flex-col">
    <h1 className="text-xl font-medium text-white leading-tight">
      Civil Service Professional Eligibility
    </h1>
    <span className="mt-1 text-xs text-white/60">
      Civil Service Commision · June 2025
    </span>
    <p className="mt-3 text-xs text-white/80">
      Official recognition of passing the Civil Service Examination for professional positions in the government.
    </p>
  </div>
</div>

        </div>
        
        <div className="flex items-center">
  
  <div className="flex h-50 w-70 items-center justify-center  bg-white/5 p-3">
    <img
      src={cisco}
      alt="OSINT Certificate"
      className="h-full w-full object-contain"
    />
  </div>
  <div className="flex h-[200px] w-[320px] items-center rounded-r-md bg-zinc-900/60 px-5">
  <div className="flex flex-col">
    <h1 className="text-xl font-medium text-white leading-tight">
      Introduction to Cybersecurity
    </h1>
    <span className="mt-1 text-xs text-white/60">
      CISCO Networking Academy · July 2024
    </span>
    <p className="mt-3 text-xs text-white/80">
      A foundational course covering essential cybersecurity concepts and practices.
    </p>
  </div>
</div>

</div>

      </div>
    </div>
  );
};

export default Cert;
