const Contact = () => {
  return (
    <div className="py-12 w-3/4 md:w-1/2 flex flex-col gap-4">
      <h1 className="text-bold text-2xl italic">Contact</h1>
      <div>
        <div className="flex justify-between gap-4 px-5 items-center">
          <h1 className="text-gray-800 font-mono">Email</h1>
          <div className="flex-grow border-t border-gray-400"></div>
          <p className="text-blue-500 font-mono">harindu.pe@gmail.com</p>
        </div>
        <div className="flex justify-between gap-4 px-5 items-center">
          <h1 className="text-gray-800 font-mono">GitHub</h1>
          <div className="flex-grow border-t border-gray-400"></div>
          <p className="text-blue-500 font-mono">@harindu-pe</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
