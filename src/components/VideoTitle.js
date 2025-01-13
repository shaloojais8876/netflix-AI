import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full absolute aspect-video pt-[20%] z-10 px-4 sm:px-8 md:px-16 lg:px-24 text-white bg-gradient-to-r from-black flex-wrap">
      <div className=" hidden sm:block w-full h-full p-6 lg:p-12 flex flex-col space-y-4">
        <h1 className=" hidden sm:block text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>
        {overview && (
          <p className="hidden sm:block text-base md:text-lg lg:text-xl max-w-2xl">
            {overview}
          </p>
        )}
        <div className="flex flex-wrap gap-4 ">
          <button className=" bg-white text-black font-bold px-6 py-2 md:px-8 md:py-3 hover:bg-opacity-70 rounded-md flex items-center space-x-2">
            <FaPlay  className="text-lg mr-2"/>
            <span className="">Play</span>
            
          </button>
          <button className="bg-gray-500 hover:bg-opacity-30 text-white font-bold px-7 py-2 md:px-9 md:py-3 bg-opacity-50 rounded-md flex items-center space-x-2">
            <GrCircleInformation />
            <span className="">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
