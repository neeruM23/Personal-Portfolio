import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      <div className="relative mb-5" data-aos="fade-up">
        <h3 className="font-black text-3xl to-gray-400 sm:text-2xl">Contact</h3>
        <span className="block absolute right-0 w-[90%] h-[1.1px] bg-gray-300"></span>
      </div>

      <div className="flex-1 w-full" data-aos="fade-up">
        <p className="text-gray-700 font-medium w-full">
          Here are my Qualification.
        </p>
      </div>
      {/* card*/}
      <div className="flex w-[90%] mx-auto mt-5 sm:w-full md:flex-col sm:gap-5">
        <div className="flex items-center justify-center flex-1">
          <fieldset
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
            data-aos="zoom-in"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className="relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Electronics and Communication Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Noida Institute of Engineering and Technology
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020 - Present
                </span>
                {/* <p className=" text-[.9rem] text-justify text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  eos cum tempora. Debitis, esse quae corporis deserunt officia
                  quos in a, quaerat vero odio vitae.
                </p> */}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
