import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";

const VideoTitle = ({title, overview}) => {
  return (
     <div className="w-screen aspect-video pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black" >
       <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
       <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
     <div className="flex my-4">
      <button className="bg-white text-black font-bold px-8 p-3 text-xl hover:bg-opacity-70 rounded-md flex items-center space-x-2">
         <FaPlay />
         <span>Play</span></button>
      <button className="bg-gray-500 hover:bg-opacity-30 text-white font-bold px-9 mx-2 text-xl bg-opacity-50 rounded-md flex items-center space-x-2">
        <GrCircleInformation />
        <span>More Info</span></button>
     </div>
    </div>
);
  };

export default VideoTitle;
