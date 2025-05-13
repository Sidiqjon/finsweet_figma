import blogImage from "../../assets/blogImg.svg";

const Blog = () => {
   return (
      <section>
         <div className="py-[130px] container">
            <div className="text-[#232536] w-full flex flex-col gap-8 items-center justify-center text-center">
               <div className="max-w-[950px] text-center">
                  <h3 className="font-semibold text-5xl leading-16">
                     A UX Case Study on Creating a Studious Environment for Students
                  </h3>
               </div>
               <p className="font-medium">Andrew Jonson Posted on 27th January 2021</p>
               <img src={blogImage} alt="Blog image" />
               <div className="max-w-[830px] text-center">
                  <p className="opacity-70">
                     Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
                     and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the
                     sea to the level of the spectator on a hillside.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Blog;
