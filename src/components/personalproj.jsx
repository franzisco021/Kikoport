import React from "react";
import { MdCancel } from "react-icons/md";
import offer from "../assets/images/Personal/offer.png";
import info1 from "../assets/images/Personal/info1.png";
import info2 from "../assets/images/Personal/info2.png";
import info3 from "../assets/images/Personal/info3.png";
import service1 from "../assets/images/Personal/service1.png";
import service2 from "../assets/images/Personal/service2.png";
import service3 from "../assets/images/Personal/service3.png";
import service4 from "../assets/images/Personal/service4.png";
import service5 from "../assets/images/Personal/service5.png";
import mask from "../assets/images/Personal/Mask.png";

const personalProject = ({ isOpen, onClose, title }) => {
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

          {/* Offer Image */}
          <div className="w-full max-w-5xl text-white pb-5">
            <img
              src={offer}
              alt="offer"
              className="w-full rounded-md object-cover"
            />
            <h6 className="italic mt-3 opacity-40 text-center">
              Image 1: A visual representation of the services I offer.
            </h6>
          </div>

          {/* Description */}
          <div className="w-full max-w-5xl text-md italic text-white font-Rubik text-center pb-10">
            <h2>
              "In this project, I shared my personal identity, using it not only
              to express myself but also to practice creating a clear and
              meaningful brand identity. Through this process, I tried to turn
              my values, style, and ideas into a design that shows a unique and
              genuine personality."
            </h2>
          </div>

          {/* Info Images */}
          <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg pb-10">
            <img
              src={info1}
              alt="info1"
              className="w-full h-96 md:h-[500px] object-cover"
            />

            <img
              src={info2}
              alt="info2"
              className="w-full h-96 md:h-[500px] object-cover"
            />

            <img
              src={info3}
              alt="info3"
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>

          {/* Sample Products */}
          <div className="w-full max-w-5xl text-white pb-10">
            <h1 className="text-4xl pb-6 font-Bebas tracking-wide">
              My Sample Product
            </h1>

            <div className="rounded-2xl overflow-hidden">
              <img
                src={service1}
                alt="service1"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <img
                src={service2}
                alt="service2"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <img
                src={service3}
                alt="service3"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <img
                src={service4}
                alt="service4"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <img
                src={service5}
                alt="service5"
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Final Image */}
          <div className="w-full max-w-5xl pb-10">
            <img
              src={mask}
              alt="mask"
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default personalProject;