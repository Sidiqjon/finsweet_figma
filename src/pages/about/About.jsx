import React from "react";
import firstImage from "../../assets/aboutImg1.svg";
import secondImage from "../../assets/aboutImg2.svg";

const About = () => {
   return (
      <section className="">
         <div className="container py-[128px] gap-12 grid grid-cols-1 md:grid-cols-2">
            <div className="text-[#282938] flex flex-col justify-center pb-2.5 pt-6">
               <strong className="font-medium text-[18px] pb-2">About us</strong>
               <h2 className="font-semibold text-[54px] leading-[74px] pb-8">Our designs solve problems</h2>
               <p className="leading-7 font-normal opacity-70 pr-[114px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
               </p>
            </div>
            <div className="">
               <img src={firstImage} alt="Image" />
            </div>
         </div>

         <div className="container mb-[128px]">
            <div className="w-full grid gap-[61px] px-20 py-24 text-[#282938] bg-[#F4F5F5] md:grid-cols-2 grid-cols-1">
               <div className="gap-4 flex flex-col">
                  <h3 className="font-semibold text-[38px]">Goal focussed</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
               <div className="gap-4 flex flex-col">
                  <h3 className="font-semibold text-[38px]">Continuous improvement</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
            </div>
            <div className="w-full">
               <img className="w-full" src={secondImage} alt="Image" />
            </div>
         </div>
      </section>
   );
};

export default About;
