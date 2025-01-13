import { BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    
    <>
      <div className=" fixed -z-10">
        <img className="h-screen object-cover md:w-screen " src={BG_IMG}
         alt="bg-img"/>
      </div>
    <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      
    </div>
    </>
  );
};

export default GptSearch;
