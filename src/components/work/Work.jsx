import WorkCard from "../../shared/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      <div className="relative mb-5" data-aos="fade-up">
        <h3 className="font-black text-3xl to-gray-400 sm:text-2xl">Works</h3>
        <span className="block absolute right-0 w-[90%] h-[1.1px] bg-gray-300"></span>
      </div>

      <div className="flex-1 w-full" data-aos="fade-up">
        <p className="text-gray-700 font-medium w-full">
          Here are some of my works.
        </p>
      </div>

      <div className="card-wrapper w-[90%] mx-auto mt-5 sm:w-fit">
        <div className="card-box grid grid-cols-3 space-y-5 space-x-5 sm:skew-y-0 md:grid-cols-2 sm:grid-cols-1 sm:gap-8 ">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
