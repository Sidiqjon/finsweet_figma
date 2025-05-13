const Contact = () => {
   return (
      <section>
         <div className="flex flex-col justify-center items-center py-[130px] gap-16 container">
            <div className="text-[#282938] max-w-[560px] text-center">
               <h3 className="text-5xl mb-4 font-semibold">Contact Us</h3>
               <p className="opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
               </p>
            </div>
            <form className="w-full bg-[#F4F6FC] px-[77px] py-[55px] rounded-[12px]">
               <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-1">
                     <label className="text-[18px]">Name</label>
                     <input className="border border-gray-400 py-[18px] indent-8 rounded-[8px]" type="text" placeholder="Enter your name" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <label className="text-[18px]">Email</label>
                     <input className="border border-gray-400 py-[18px] indent-8 rounded-[8px]" type="text" placeholder="Enter your email" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <label className="text-[18px]">Subject</label>
                     <input className="border border-gray-400 py-[18px] indent-8 rounded-[8px]" type="text" placeholder="Provide context" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <label className="text-[18px]">Subject</label>
                     <input className="border border-gray-400 py-[18px] indent-8 rounded-[8px]" type="text" placeholder="Select subject" />
                  </div>
               </div>
               <div className="mb-8 flex flex-col gap-1.5 w-full">
                  <label className="text-[18px]">Message</label>
                  <textarea className="border border-gray-400 pt-[18px] p-8 h-[138px] rounded-[8px]" placeholder="Write your  question here"></textarea>
               </div>
               <button className="px-16 py-4 text-white border cursor-pointer bg-[#282938] rounded-[41px]">Send Message</button>
            </form>
         </div>
      </section>
   );
};

export default Contact;
