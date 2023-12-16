import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Intro from "./sections/intro";

function App() {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-gray-100">
      <Intro />
      <Projects />
      {/* <Experience /> */}
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
