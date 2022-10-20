import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import * as Scroll from "react-scroll";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle, nav, close }) => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">DYvia.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="platform"
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer"
              >
                Platform
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4 cursor-pointer">
            Sign In
          </button>
          <button className="px-5 py-3 cursor-pointer">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={toggle}>
          {!nav ? (
            <Bars3Icon className="w-5 cursor-pointer" />
          ) : (
            <XMarkIcon className="w-5 cursor-pointer" />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="home"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
            onClick={close}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
            className="cursor-pointer"
            onClick={close}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
            className="cursor-pointer"
            onClick={close}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="platform"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            onClick={close}
          >
            Platform
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="pricing"
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
            onClick={close}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
