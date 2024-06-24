import { BiLogoLinkedin } from "react-icons/bi";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <div id="footer" className="h-[300px] mx-auto m-auto mt-16 sm:h-[250px]">
      <div className="flex justify-between items-center flex-col gap-8 h-full p-10 bg-yellow-400 sm:p-7">
        <h2 className="font-black text-5xl sm:text-3xl" data-aos="zoom-out">
          Let's Talk
        </h2>
        <div className="flex justify-center items-center gap-8 sm:gap-5">
          <a
            className="flex justify-center items-center flex-col text-white font-medium"
            href="https://www.linkedin.com/in/neeraj-mahto-95b9b41b8/"
            data-aos="fade-up"
            data-aos-duration="1000"
            target="_blank"
          >
            <BiLogoLinkedin className="text-black text-3xl cursor-pointer hover:scale-125" />
          </a>
          <a
            className="flex justify-center items-center flex-col text-white font-medium"
            href="https://www.instagram.com/neerux.xo/"
            data-aos="fade-up"
            data-aos-duration="1000"
            target="_blank"
          >
            <SiInstagram className="text-black text-3xl cursor-pointer hover:scale-125" />
          </a>
          <a
            className="flex justify-center items-center flex-col text-white font-medium"
            href=""
            data-aos="fade-up"
            data-aos-duration="1000"
            target="_blank"
          >
            <SiWhatsapp className="text-black text-3xl cursor-pointer hover:scale-125" />
          </a>
        </div>

        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2024 </span> All rights are reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
