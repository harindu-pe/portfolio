import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Stack = () => {
  return (
    <div className="py-12 w-3/4 md:w-1/2 flex flex-col gap-4">
      <h1 className="text-bold text-2xl italic">Stack</h1>
      <div className="grid grid-cols-2 gap-2 ml-4">
        <div className="flex gap-3 items-center">
          <IoLogoJavascript size="50" />
          <div>
            <h1 className="font-bold text-sm text-gray-800">JavaScript</h1>
            <p className="tracking-tight text-sm text-gray-600 font-mono">
              Language
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <FaReact size="50" />
          <div>
            <h1 className="font-bold text-sm text-gray-800">React</h1>
            <p className="tracking-tight text-sm text-gray-600 font-mono">
              JS Framework
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <IoLogoFirebase size="50" />
          <div>
            <h1 className="font-bold text-sm text-gray-800">Firebase</h1>
            <p className="tracking-tight text-sm text-gray-600 font-mono">
              Backend As A Service
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <SiTailwindcss size="50" />
          <div>
            <h1 className="font-bold text-sm text-gray-800">Tailwind CSS</h1>
            <p className="tracking-tight text-sm text-gray-600 font-mono">
              CSS Framework
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
