import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";

import ProgressBar from "../../shared/ProgressBar";
import SkillBox from "../../shared/SkillBox";

const Skills = ({ darkMode, toggleDarkMode }) => {
  return (
    <div id="skills">
      <div className="container m-auto mt-16">
        <div className="relative mb-5" data-aos="fade-up">
          <h3 className="font-black text-3xl to-gray-400 sm:text-2xl">
            My Skills
          </h3>

          <span className="block absolute right-0 w-[90%] h-[1.1px] bg-gray-300"></span>
        </div>

        <div className="flex md:flex-col">
          <div className="left flex-1 w-full">
            <p className="w-full text-gray-700 font-medium">
              Here are my skills
            </p>

            {/* Left Box  */}
            <div
              className="flex justify-end items-center h-[100%] md:justify-center"
              data-aos="zoom-in"
            >
              <div className="flex flex-col gap-6 w-3/4 md:w-[90%] my-5">
                <ProgressBar logo={<SiHtml5 />} name="HTML" value={95} />
                <ProgressBar logo={<SiCss3 />} name="CSS" value={87} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name="Javascript"
                  value={80}
                />
                <ProgressBar
                  logo={<SiTypescript />}
                  name="Typescript"
                  value={90}
                />
                <ProgressBar
                  logo={<SiBootstrap />}
                  name="Bootstrap CSS"
                  value={95}
                />
                <ProgressBar logo={<SiReact />} name="React JS" value={82} />
              </div>
            </div>
          </div>

          {/* Right Box  */}
          <div className="relative flex justify-center items-center flex-wrap flex-1 gap-10 p-5 sm:w-full">
            <div className="flex flex-col gap-10">
              <SkillBox
                logo={<SiMysql />}
                skill="MySQL"
                black="white"
                white="black"
              />
              <SkillBox
                logo={<BiLogoJava />}
                skill="Java"
                black="white"
                white="black"
              />
            </div>
            <div className="flex flex-col gap-10">
              <SkillBox
                logo={<SiNodedotjs />}
                skill="Node.js"
                black="black"
                white="white"
              />
              <SkillBox
                logo={<SiPython />}
                skill="Python"
                black="black"
                white="white"
              />
            </div>
            <div className="flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                skill="Express.js"
                black="white"
                white="black"
              />
              <SkillBox
                logo={<SiMongodb />}
                skill="MongoDB"
                black="white"
                white="black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
