import React from "react";
import { MdCancel } from "react-icons/md";
import offer from "../assets/images/Personal/offer.png";
import org1 from "../assets/images/New folder/ORG/1.jpg";
import org2 from "../assets/images/New folder/ORG/2.jpg";
import org3 from "../assets/images/New folder/ORG/3.jpg";
import org4 from "../assets/images/New folder/ORG/4.jpg";

import cover from "../assets/images/New folder/OSOURCE/cover.jpg";
import mockup from "../assets/images/New folder/OSOURCE/mockup.jpg";
import mockup1 from "../assets/images/New folder/OSOURCE/mockup1.jpg";
import mockup2 from "../assets/images/New folder/OSOURCE/mockup2.jpg";
import mockup3 from "../assets/images/New folder/OSOURCE/mockup3.jpg";
import model from "../assets/images/New folder/OSOURCE/model.jpg";
import model1 from "../assets/images/New folder/OSOURCE/model1.jpg";
import model2 from "../assets/images/New folder/OSOURCE/model2.png";
import model3 from "../assets/images/New folder/OSOURCE/model3.jpg";
import model4 from "../assets/images/New folder/OSOURCE/model4.png";
import model5 from "../assets/images/New folder/OSOURCE/model5.jpg";
import model6 from "../assets/images/New folder/OSOURCE/model6.jpg";
import model7 from "../assets/images/New folder/OSOURCE/model7.jpg";
import posting from "../assets/images/New folder/OSOURCE/posting.jpg";
import posting1 from "../assets/images/New folder/OSOURCE/posting1.jpg";
import posting2 from "../assets/images/New folder/OSOURCE/posting2.jpg";
import posting3 from "../assets/images/New folder/OSOURCE/posting3.png";


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
        <div className="p-2 flex flex-col ">

          <div className="w-full max-w-5xl text-white pb-5 mx-auto text-center">
            <img
              src={cover}
              alt="mockup"
              className="w-full rounded-md object-cover h-80 opacity-50"
            />

            <h6 className="italic mt-3 opacity-50 max-w-3xl mx-auto">
              I found this project particularly enjoyable as it allowed me to incorporate my own artistic style.
              My design approach combines street-inspired elements with a touch of minimalism, resulting in a distinctive
              and balanced visual aesthetic.
            </h6>
          </div>
          <div className="py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 justify-center">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[mockup, mockup1, mockup2, mockup3].map((img, index) => (
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

          <div className="py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 justify-center">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[model, model1, model2, model3, model4, model5, model6, model7].map((img, index) => (
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
                A selection of photos from our model photoshoot, highlighting the shirt we designed and produced.
              </h6>
            </div>
          </div>


          <div className="py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 justify-center">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[posting, posting1, posting2, posting3].map((img, index) => (
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
                This is some of the graphics for posting for the social media
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default osource;
