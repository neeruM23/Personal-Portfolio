import { TypeAnimation } from "react-type-animation";
import { MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin, FaStackOverflow, FaPlay } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import resume from "../../assets/resume.pdf";
import mine from "../../assets/mine.jpg";
import circle from "../../assets/circle2.png";

const Hero = ({ darkMode, toggleDarkMode }) => {
  return (
    <div id="home" className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3]">
      <div className="container h-[750px] flex mx-auto pt-5 md:h-[100vh] md:flex-col-reverse sm:h-[780px] sm:flex-col-reverse sm:pt-0">
        <div className="flex flex-col justify-center flex-1 gap-5 left mt-4 md:mt-0 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info flex flex-col items-start justify-center gap-3 sm:gap-2 w-fit">
            <h2
              className="font-black text-5xl sm:text-[2rem]"
              data-aos="fade-up"
            >
              Hello, My name is Neeraj Mahto
            </h2>

            <TypeAnimation
              className="font-black text-yellow-500 text-4xl sm:text-3xl"
              data-aos="fade-up"
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Freelancer",
                2000,
              ]}
              speed={10}
              wrapper="h2"
              repeat={Infinity}
            />

            <p
              className="text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
              data-aos="fade-up"
            >
              I’m a certified full-stack developer, who enjoys building Seamless
              Solutions, Front to Back.
            </p>
          </div>

          <div className="flex gap-5 buttons" data-aos="fade-up">
            <a
              href=""
              className="bg-black text-white text-[1rem] font-bold px-10 py-2 sm:px-8 rounded-lg hover:text-yellow-500"
            >
              <span>Hire Me</span>
            </a>

            <a
              className="flex items-center gap-2 border border-black text-[1rem] bg-white py-2 px-7 sm:px-6 rounded-lg font-bold hover:text-yellow-500"
              href={resume}
              download
            >
              <div className="flex items-center gap-1">
                Resume <MdDownload />
              </div>
            </a>
          </div>

          <div className="flex icons mt-5">
            <ul
              className="flex gap-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <li>
                <a href="https://github.com/neeruM23" target="_blank">
                  <FaGithub className="w-[1.8rem] h-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/neeraj-mahto-95b9b41b8/"
                  target="_blank"
                >
                  <FaLinkedin className="w-[1.8rem] h-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              {/* <li>
                <a href="https://stackoverflow.com/users/21967287/richish-mandal">
                  <FaStackOverflow className="w-[1.8rem] h-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/ItsRichish/">
                  <SiLeetcode className="w-[1.8rem] h-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="right flex justify-center items-center flex-1 top-5 md:items-end sm:items-end">
          <div className="relative flex items-center w-fit h-[88%] sm:items-end">
            <img
              className="w-full h-[90%] object-cover md:h-[95%] md:m-auto sm:h-[75%] sm:m-0 rounded-full"
              src={mine}
              alt="mine"
            />

            <div className="absolute right-8 md:right-2 bottom-10 md:bottom-3">
              <div
                className="relative cursor-pointer"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src={circle}
                  alt="circle"
                />
                <FaPlay className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
