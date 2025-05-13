import facebook from "../../assets/facebook2.svg";
import twitter from "../../assets/twitter2.svg";
import instagram from "../../assets/instagram2.svg";
import linkedin from "../../assets/linkedin2.svg";

const Work = () => {
   return (
      <section className="bg-[#F4F6FC]">
         <div className="py-[100px] grid place-items-center container">
            <div className="flex justify-center items-center flex-col gap-5 w-full lg:w-[50%] text-center text-[#282938]">
               <p className="font-medium opacity-70">What we created</p>
               <p className="font-semibold text-5xl">Our Work Portfolio</p>
               <p className="font-medium opacity-70">We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
               <div className="flex gap-7">
                  <img src={facebook} alt="Facebook icon" />
                  <img src={twitter} alt="Twitter icon" />
                  <img src={instagram} alt="Instagram icon" />
                  <img src={linkedin} alt="Linkedin icon" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Work;
