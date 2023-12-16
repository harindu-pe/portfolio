import { CiLocationOn } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { IoMdFolderOpen } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { IoIosContact } from "react-icons/io";

const Intro = () => {
  return (
    <div className="py-12 w-3/4 md:w-1/2 flex flex-col gap-4">
      <h1 className="text-4xl font-extrabold italic">Harindu Egalla</h1>

      <div className="font-mono text-gray-600">
        Front-end developer & designer
      </div>

      <p className="font-mono text-gray-600">
        I design and build website templates so you can launch your website in
        minutes. Check out my latest projects, templates and what I’m up to
        right now.
      </p>

      <div className="font-mono text-gray-600 flex flex-col gap-2 md:flex-row md:gap-12">
        <div className="flex items-center gap-2">
          <div className="pb-0.5">
            <CiLocationOn size="17" />
          </div>
          <span className="text-sm">Colombo, Sri Lanka</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-green-400">
            <FaCircle size="12" />
          </div>
          <span className="text-sm">Available for work</span>
        </div>
      </div>

      <nav className="font-mono text-gray-600 mt-4">
        <ul className="flex flex-col gap-2 tracking-wider">
          <li className="flex items-center gap-2 hover:underline">
            <IoMdFolderOpen />
            <a href="#">Projects</a>
          </li>
          <li className="flex items-center gap-2 hover:underline">
            <FaHistory />
            <a href="#">Experience</a>
          </li>
          <li className="flex items-center gap-2 hover:underline">
            <GoStack />
            <a href="#">Stack</a>
          </li>
          <li className="flex items-center gap-2 hover:underline">
            <IoIosContact />
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Intro;
