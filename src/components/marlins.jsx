import React from "react";
import { MdCancel } from "react-icons/md";
import offer from "../assets/images/New folder/MARLINS/marlinscover.jpg";
import marlins1 from "../assets/images/New folder/MARLINS/1.jpg";
import marlins2 from "../assets/images/New folder/MARLINS/2.jpg";
import marlins3 from "../assets/images/New folder/MARLINS/3.jpg";
import marlins4 from "../assets/images/New folder/MARLINS/4.jpg";
import marlins5 from "../assets/images/New folder/MARLINS/5.jpg";
import marlins6 from "../assets/images/New folder/MARLINS/6.jpg";
import marlins7 from "../assets/images/New folder/MARLINS/7.jpg";
import marlins8 from "../assets/images/New folder/MARLINS/8.jpg";
import marlins9 from "../assets/images/New folder/MARLINS/9.jpg";
import marlins10 from "../assets/images/New folder/MARLINS/marlins10.jpg";


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

        <div className="flex flex-col p-2">
          <div className="w-full max-w-5xl text-white pb-5 mx-auto text-center">
            <img
              src={offer}
              alt="mockup"
              className="w-full rounded-md object-cover h-80 opacity-50 opacity-40"
            />

            <h6 className="italic mt-3 opacity-50 max-w-3xl mx-auto">
              The Marlins Basketball Team is an amateur team from Bulacan
              that aimed to showcase their talent through social media. This
              experience allowed me to apply my creative
              skills and further develop my portfolio and professional growth.
            </h6>
          </div>
          <div className="py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 justify-center">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[marlins1, marlins2, marlins3, marlins4, marlins5, marlins6, marlins7, marlins8, marlins9, marlins10].map((img, index) => (
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
              <h6 className="italic mt-3 text-center text-white opacity-50 max-w-3xl mx-auto">
                This is one of our released shirt consist of two variation (white and black)
              </h6>
            </div>
          </div>




        </div>


      </div>
    </div>
  );
};

export default marlins;

