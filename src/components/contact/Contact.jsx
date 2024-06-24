import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vr6vyns",
      "template_5181wbg",
      form.current,
      "tPqZG6sXgAtUayFVJ"
    );
    e.target.reset();
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      <div className="relative mb-5" data-aos="fade-up">
        <h3 className="font-black text-3xl to-gray-400 sm:text-2xl">Contact</h3>
        <span className="block absolute right-0 w-[90%] h-[1.1px] bg-gray-300"></span>
      </div>

      <div className="flex justify-center items-center w-[90%] mx-auto mt-5 sm:flex-col sm:w-full">
        <div className="flex justify-center items-center flex-1 w-[70%] sm:flex-col sm:w-full">
          <div className="flex justify-end items-end flex-col flex-3 w-1/2 sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="font-bold text-5xl sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>

          <div className="flex justify-center items-center p-5">
            <button
              className="p-2 font-extrabold text-yellow-500 text-3xl rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]"
              data-aos="zoom-in"
            >
              <FaArrowRightLong className="md:rotate-90" />
            </button>
          </div>
        </div>

        <div className="flex-1">
          <form
            action="mailto:neerajmahto2404@gmail.com"
            ref={form}
            className="flex justify-center items-center flex-col gap-5 w-[70%] mx-auto md:w-full sm:w-[95%]"
            onSubmit={sendEmail}
            data-aos="zoom-in"
          >
            <input
              className="w-full p-2 px-3 rounded-lg shadow-[0_0_16px_0px_rgba(0,0,0,0.1)]"
              type="email"
              placeholder="e.g. munesh@mail.com"
              name="email"
              required
            />
            <input
              className="w-full p-2 px-3 rounded-lg shadow-[0_0_16px_0px_rgba(0,0,0,0.1)]"
              type="text"
              placeholder="e.g. Munesh"
              name="name"
              required
            />
            <textarea
              className="w-full p-2 px-3 rounded-lg shadow-[0_0_16px_0px_rgba(0,0,0,0.1)]"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="message"
              id=""
              required
            />

            <button
              className="flex justify-center items-center w-full p-2 rounded-lg text-white bg-yellow-500 font-semibold space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
