import React from "react";
import { MdCancel } from "react-icons/md";
import DKLT1 from "../assets/images/New folder/DKLT design/1.png";
import DKLT2 from "../assets/images/New folder/DKLT design/2.png";
import DKLT3 from "../assets/images/New folder/DKLT design/3.png";
import DKLT4 from "../assets/images/New folder/DKLT design/4.png";


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

          <div >
            <img
              src={DKLT1}
              alt="mockup"
              className="w-full rounded-md object-cover h-xl opacity-50 "
            />
          </div>

          <h6 className="italic mt-3 text-center text-white opacity-50 max-w-3xl mx-auto mb-4">
            Through this project, I found a valuable opportunity to showcase my skills in both design and execution. I carefully approached the process by
            understanding the project’s purpose and ensuring that every visual element aligns with its identity.
          </h6>
        </div>
        <div >
          <img
            src={DKLT2}
            alt="mockup"
            className="w-full rounded-md object-cover h-xl opacity-50 "
          />
        </div>



      </div>
    </div>
  );
};

export default marlins;
