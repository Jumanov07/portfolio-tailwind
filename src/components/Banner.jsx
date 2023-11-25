import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import BannerPhoto from "../assets/images/profile.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <section
      id="Home"
      className="lg:px-20 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:pt-40 lg:pb-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          Welcome To <span className="text-fuchsia-500 ">My Website</span>
        </h1>

        <p data-aos="fade-left">
          Here you will find my projects and experience in frontend development.
          I invite you to explore my work and learn more about my professional
          journey.
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/Jumanov07"
                className="text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>

              <a
                href="https://www.linkedin.com/in/jumanov-alisher-635735265/"
                className="text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedin className="text-[28px]" />
              </a>

              <a
                href="https://t.me/minimentor"
                className="text-fuchsia-500 rounded-full glow p-2"
              >
                <FaTelegram className="text-[28px]" />
              </a>

              <a
                href="https://www.instagram.com/jumanov16_/"
                className="text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        data-aos="fade-up"
        src={BannerPhoto}
        alt="image profile"
        className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
        width={290}
        height={290}
      />
    </section>
  );
};

export default Banner;
