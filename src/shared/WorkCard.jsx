import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

import { data } from "../data";

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;

const WorkCard = () => {
  const dataList = [...data];

  return (
    <>
      {dataList.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="relative">
              <div className="w-[380px] h-[280px] mx-auto transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden hover:scale-125 sm:h-[260px] sm:w-[92%] sm:bg-cover">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full transition duration-500 cursor-pointer hover:scale-125"
                />
              </div>

              <div className="popup w-full h-[280px] p-4 shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%]">
                <p className="w-[90%] text-gray-900 text-base text-justify leading-[1.4]">
                  {data.desc}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="flex justify-center items-center gap-2 mt-3 p-1 px- rounded-md shadow-md2 font-medium"
                  >
                    <FiExternalLink className="w-[35px] h-[35px] p-2 text-black bg-white rounded-full border" />
                    <p className="text-black">Demo</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="flex justify-center items-center gap-2 mt-3 p-1 px- rounded-md shadow-md2 font-medium"
                  >
                    <SiGithub className="w-[35px] h-[35px] p-2 text-black bg-white rounded-full border" />
                    <p className="text-black">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="font-medium text-gray-800 text-xl sm:text-lg">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;
