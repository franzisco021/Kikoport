import React from "react";
import { MdCancel } from "react-icons/md";
import pic1 from "../assets/images/New folder/PICTURE/1.jpg";
import pic2 from "../assets/images/New folder/PICTURE/2.jpg";
import pic3 from "../assets/images/New folder/PICTURE/3.jpg";
import pic4 from "../assets/images/New folder/PICTURE/4.jpg";
import pic5 from "../assets/images/New folder/PICTURE/5.jpg";
import pic6 from "../assets/images/New folder/PICTURE/6.jpg";
import pic7 from "../assets/images/New folder/PICTURE/7.jpg";
import pic8 from "../assets/images/New folder/PICTURE/8.jpg";
import pic9 from "../assets/images/New folder/PICTURE/9.jpg";
import pic10 from "../assets/images/New folder/PICTURE/10.jpg";
import pic11 from "../assets/images/New folder/PICTURE/11.jpg";
import pic12 from "../assets/images/New folder/PICTURE/12.jpg";
import pic13 from "../assets/images/New folder/PICTURE/13.jpg";
import pic14 from "../assets/images/New folder/PICTURE/14.jpg";
import pic15 from "../assets/images/New folder/PICTURE/15.jpg";
import pic16 from "../assets/images/New folder/PICTURE/16.jpg";
import pic17 from "../assets/images/New folder/PICTURE/17.jpg";
import pic18 from "../assets/images/New folder/PICTURE/18.jpg";
import pic19 from "../assets/images/New folder/PICTURE/19.jpg";
import pic20 from "../assets/images/New folder/PICTURE/20.jpg";
import pic21 from "../assets/images/New folder/PICTURE/21.jpg";
import pic22 from "../assets/images/New folder/PICTURE/22.jpg";
import pic23 from "../assets/images/New folder/PICTURE/23.jpg";
import pic24 from "../assets/images/New folder/PICTURE/24.jpg";
import pic25 from "../assets/images/New folder/PICTURE/25.jpg";
import pic26 from "../assets/images/New folder/PICTURE/26.jpg";
import pic27 from "../assets/images/New folder/PICTURE/27.jpg";
import pic28 from "../assets/images/New folder/PICTURE/28.jpg";
import pic29 from "../assets/images/New folder/PICTURE/29.jpg";
import pic30 from "../assets/images/New folder/PICTURE/30.jpg";
import pic31 from "../assets/images/New folder/PICTURE/31.jpg";
import pic32 from "../assets/images/New folder/PICTURE/32.jpg";
import pic33 from "../assets/images/New folder/PICTURE/33.jpg";
import pic34 from "../assets/images/New folder/PICTURE/34.jpg";
import pic35 from "../assets/images/New folder/PICTURE/35.jpg";
import pic36 from "../assets/images/New folder/PICTURE/36.jpg";
import pic37 from "../assets/images/New folder/PICTURE/37.jpg";
import pic38 from "../assets/images/New folder/PICTURE/38.jpg";
import pic39 from "../assets/images/New folder/PICTURE/39.jpg";

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
        <div className="grid grid-cols-3 auto-rows-[200px] gap-4 mx-4 pt-4 ">
          {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30, pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39].map((img, index) => (
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
