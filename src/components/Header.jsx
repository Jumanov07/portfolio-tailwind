import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../assets/images/logo.png";

const STYLE_LI_CONTENT =
  "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer";

const STYLE_LI =
  "hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const openBurgerHandler = () => setIsShow((prev) => !prev);

  const content = (
    <div className="lg:hidden block absolute top-20 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link spy smooth to="Home">
          <li className={STYLE_LI_CONTENT}>Home</li>
        </Link>

        <Link spy smooth to="About">
          <li className={STYLE_LI_CONTENT}>About</li>
        </Link>

        <Link spy smooth to="Services">
          <li className={STYLE_LI_CONTENT}>Services</li>
        </Link>

        <Link spy smooth to="Projects">
          <li className={STYLE_LI_CONTENT}>Projects</li>
        </Link>

        <Link spy smooth to="Contacts">
          <li className={STYLE_LI_CONTENT}>Contacts</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <header className="fixed top-0 z-10 w-full max-w-[1440px] bg-slate-900">
      <nav>
        <div className="h-10vh items-center flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">
              <img
                className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
                width={60}
                height={60}
                src={Logo}
                alt="logo"
              />
            </span>
          </div>

          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
            <div className="flex-10 items-center">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy smooth to="Home">
                  <li className={STYLE_LI}>Home</li>
                </Link>

                <Link spy smooth to="About">
                  <li className={STYLE_LI}>About</li>
                </Link>

                <Link spy smooth to="Services">
                  <li className={STYLE_LI}>Services</li>
                </Link>

                <Link spy smooth to="Projects">
                  <li className={STYLE_LI}>Projects</li>
                </Link>

                <Link spy smooth to="Contacts">
                  <li className={STYLE_LI}>Contacts</li>
                </Link>
              </ul>
            </div>
          </div>

          <div>{isShow && content}</div>

          <button
            className="block md:hidden transition"
            onClick={openBurgerHandler}
          >
            {isShow ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
