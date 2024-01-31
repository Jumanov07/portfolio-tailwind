import Logo from "../assets/images/logo.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTelegram } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Footer = ({ language }) => (
  <footer
    id="Footer"
    className="bg-slate-800 text-white lg:px-48 px-4 py-20 flex justify-center"
  >
    <div className="container flex justify-center flex-wrap gap-8">
      <div className="mb-4 md:mb-0">
        <span className="text[22px] font-semibold text-fuchsia-800 py-3 uppercase">
          <img
            className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
            src={Logo}
            width={100}
            height={100}
            alt="logo"
          />
        </span>

        <p
          className="text-[16px] my-4"
          style={{
            width: "200px",
          }}
        >
          {language
            ? "Interested in my work? Contact me and let&apos;s create something together."
            : "Вас заинтересовали мои работы? Свяжитесь со мной, и давайте создадим что-нибудь вместе."}
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-fuchsia-800 py-3 uppercase">
          {language ? "Contacts" : "Контакты"}
        </h2>

        <p>
          {language ? "Email" : "Почта"} <br />
          <a href="mailto:zumanovaliser814@gmail.com">
            zumanovaliser814@gmail.com
          </a>
        </p>

        <p className="mt-3">
          {language ? "Phone" : "Номер"}
          <br /> <a href="tel:+996551130187"> +996 551 130 187</a>
        </p>
      </div>

      <div className="flex space-x-4">
        <a
          href="https://github.com/Jumanov07"
          className="text-fuchsia-500 h-fit rounded-full glow p-2"
        >
          <AiFillGithub className="text-[28px]" />
        </a>

        <a
          href="https://www.linkedin.com/in/jumanov-alisher-635735265/"
          className="text-fuchsia-500 h-fit rounded-full glow p-2"
        >
          <FaLinkedin className="text-[28px]" />
        </a>

        <a
          href="https://t.me/minimentor"
          className="text-fuchsia-500 h-fit rounded-full glow p-2"
        >
          <FaTelegram className="text-[28px]" />
        </a>

        <a
          href="https://www.instagram.com/jumanov16_/"
          className="text-fuchsia-500 h-fit rounded-full glow p-2"
        >
          <FaInstagram className="text-[28px]" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
