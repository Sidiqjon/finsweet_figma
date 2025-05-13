import pointer from "../../assets/Pointer.svg";

const Pricing = () => {
   return (
      <section className="my-[130px]">
         <div className="container">
            <div className="mb-[64px] grid place-items-center">
               <div className="text-center max-w-[562px] text-[#282938] flex flex-col justify-center gap-4">
                  <h3 className="font-semibold text-5xl">Our Pricing Plans</h3>
                  <p className="opacity-70 font-medium">
                     When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
               <div className="flex flex-col px-12 py-16 rounded-[12px] bg-[#F4F6FC]">
                  <div className="mb-5 flex items-center gap-2">
                     <p className="text-[38px] text-[#282938] font-semibold">$299</p>
                     <p className="text-[#2405F2]">Per Design</p>
                  </div>
                  <div className="flex-1 text-[#282938] mb-[78px]">
                     <h3 className="text-2xl mb-2">Landing page</h3>
                     <p className="opacity-70">When you’re ready to go beyond prototyping in Figma.</p>
                  </div>
                  <div className="flex flex-col flex-1 gap-5 text-[#282938] mb-[78px]">
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>All limited links</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Own analytics platform</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Chat support</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p className="opacity-70">Optimize hashtags</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p className="opacity-70">Unlimited users</p>
                     </div>
                  </div>
                  <div className="grid place-items-center">
                     <button className="bg-[#282938] py-4 px-[77px] text-[18px] text-white rounded-[41px]">Get started</button>
                  </div>
               </div>

               <div className="flex flex-col px-12 py-16 rounded-[12px] bg-[#1C1E53]">
                  <div className="mb-5 flex items-center gap-2">
                     <p className="text-[38px] text-white font-semibold">$399</p>
                     <p className="text-[#FCD980]">Multi Design</p>
                  </div>
                  <div className="flex-1 text-white mb-[78px]">
                     <h3 className="text-2xl mb-2">Website Page</h3>
                     <p className="opacity-70">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
                  </div>
                  <div className="flex flex-col flex-1 gap-5 text-white mb-[78px]">
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>All limited links</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Own analytics platform</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Chat support</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Optimize hashtags</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Unlimited users</p>
                     </div>
                  </div>
                  <div className="grid place-items-center">
                     <button className="bg-[#FCD980] py-4 px-[77px] text-[18px] text-[#282938] rounded-[41px]">Get started</button>
                  </div>
               </div>

               <div className="flex flex-col px-12 py-16 rounded-[12px] bg-[#F4F6FC]">
                  <div className="mb-5 flex items-center gap-2">
                     <p className="text-[38px] text-[#282938] font-semibold">$499+</p>
                     <p className="text-[#2405F2]">Per Design</p>
                  </div>
                  <div className="flex-1 text-[#282938] mb-[78px]">
                     <h3 className="text-2xl mb-2">Complex Project</h3>
                     <p className="opacity-70">When you’re ready to go beyond prototyping in Figma,</p>
                  </div>
                  <div className="flex flex-col flex-1 gap-5 text-[#282938] mb-[78px]">
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>All limited links</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Own analytics platform</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Chat support</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Optimize hashtags</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Unlimited users</p>
                     </div>
                     <div className="flex gap-3">
                        <img src={pointer} alt="" />
                        <p>Assist and Help</p>
                     </div>
                  </div>
                  <div className="grid place-items-center">
                     <button className="bg-[#282938] py-4 px-[77px] text-[18px] text-white rounded-[41px]">Contact us</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Pricing;
