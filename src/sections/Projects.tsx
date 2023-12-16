import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  return (
    <div className="w-3/4 md:w-1/2 flex flex-col gap-4">
      <h1 className="text-bold text-2xl italic">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="group bg-gray-100 hover:bg-gray-200 transition duration-100 ease-in hover:cursor-pointer border-0">
          <CardHeader>
            <div className="py-6 px-3">
              <img
                className="rounded-lg group-hover:-translate-y-1 transition duration-900 ease-linear"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image description"
              />
            </div>
            <CardTitle className="tracking-wide text-gray-800">matis</CardTitle>
            <CardDescription className="tracking-wider text-gray-600 text-justify font-mono">
              A minimal website template that's all about the music.
            </CardDescription>
            <div className="tracking-wide flex items-center gap-1 text-blue-600 text-sm">
              <span>Preview</span>
              <IoIosArrowForward />
            </div>
          </CardHeader>
        </Card>
        <Card className="group bg-gray-100 hover:bg-gray-200 transition duration-100 ease-in hover:cursor-pointer border-0">
          <CardHeader>
            <div className="py-6 px-3">
              <img
                className="rounded-lg group-hover:-translate-y-1 transition duration-900 ease-linear"
                src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image description"
              />
            </div>
            <CardTitle className="tracking-wide text-gray-800">
              minilio
            </CardTitle>
            <CardDescription className="tracking-wider text-gray-600 text-justify font-mono">
              A minimal portfolio or personal website template.
            </CardDescription>
            <div className="tracking-wide flex items-center gap-1 text-blue-600 text-sm">
              <span>Preview</span>
              <IoIosArrowForward />
            </div>
          </CardHeader>
        </Card>
        <Card className="group  bg-gray-100 hover:bg-gray-200 transition duration-100 ease-in hover:cursor-pointer border-0">
          <CardHeader>
            <div className="py-6 px-3">
              <img
                className="rounded-lg group-hover:-translate-y-1 transition duration-900 ease-linear"
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image description"
              />
            </div>
            <CardTitle className="tracking-wide text-gray-800">jeden</CardTitle>
            <CardDescription className="tracking-wider text-gray-600 text-justify font-mono">
              A one-page portfolio website template.
            </CardDescription>
            <div className="tracking-wide flex items-center gap-1 text-blue-600 text-sm">
              <span>Preview</span>
              <IoIosArrowForward />
            </div>
          </CardHeader>
        </Card>
        <Card className="group  bg-gray-100 hover:bg-gray-200 transition duration-100 ease-in hover:cursor-pointer border-0">
          <CardHeader>
            <div className="py-6 px-3">
              <img
                className="rounded-lg group-hover:-translate-y-1 transition duration-900 ease-linear"
                src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image description"
              />
            </div>
            <CardTitle className="tracking-wide text-gray-800">
              cardile
            </CardTitle>
            <CardDescription className="tracking-wider text-gray-600 text-justify font-mono">
              A minimal profile card with a black and white look.
            </CardDescription>
            <div className="tracking-wide flex items-center gap-1 text-blue-600 text-sm">
              <span>Preview</span>
              <IoIosArrowForward />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
