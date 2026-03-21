import React from "react";
import { MdCancel } from "react-icons/md";
import offer from "../assets/images/Personal/offer.png";
import org1 from "../assets/images/New folder/ORG/1.jpg";
import org2 from "../assets/images/New folder/ORG/2.jpg";
import org3 from "../assets/images/New folder/ORG/3.jpg";
import org4 from "../assets/images/New folder/ORG/4.jpg";

const osource = ({ isOpen, onClose, title }) => {
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

        {/* Content */}
        <div className="p-2 flex flex-col items-center">
          
          <div className="w-full max-w-5xl text-white pb-5">
            <img
              src={org1}
              alt="org1"
              className="w-full rounded-md object-cover"
            />
          </div>

          <div className="w-full max-w-5xl text-white pb-5">
            <img
              src={org2}
              alt="org1"
              className="w-full rounded-md object-cover"
            />
          </div>

          <div className="w-full max-w-5xl text-white pb-5">
            <img
              src={org3}
              alt="org1"
              className="w-full rounded-md object-cover"
            />
            <h6 className="italic mt-3 opacity-40 text-center">
              For this department shirt, I incorporated design elements that
              represent our department’s identity.
            </h6>
          </div>

          <div className="w-full max-w-5xl text-white pb-5">
            <img
              src={org4}
              alt="org1"
              className="w-full rounded-md object-cover"
            />
            <h6 className="italic mt-3 opacity-40 text-center">
              Image 1: A visual representation of the services I offer.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default osource;
