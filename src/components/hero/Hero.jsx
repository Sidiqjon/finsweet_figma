import Arrow from "../../assets/Arrow1.svg"
import heroImg from "../../assets/heroimg.svg"

const Hero = () => {
   return (
      <div className="bg-[#1C1E53]">
         <div className="w-full container grid grid-cols-1 pt-[126px] pb-[128px] gap-[60px] lg:grid-cols-2 ]">
            <div className="max-w-[582px]">
               <h1 className="text-[54px] text-[#FFFFFF] mb-6 font-semibold">Building stellar websites for early startups</h1>
               <p className="text-[#BBBBCB] leading-[28px] mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
               <div className="flex gap-[40px] items-center">
                     <button className="px-14 py-4 rounded-[41px] bg-[#FCD980] text-[18px]">View our work</button>
                  <div className="flex items-center gap-4">
                     <p className="text-[16px] text-[#FFFFFF]">View Pricing</p>
                     <img src={Arrow} alt="arrow icon" />
                  </div>
               </div>
            </div>
            <div className="flex items-center">
               <img src={heroImg} alt="Hero image" />
            </div>
         </div>
      </div>
   );
};

export default Hero;
