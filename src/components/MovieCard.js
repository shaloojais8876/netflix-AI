import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
  <div className=" w-36 md:w-40 pr-2 transform transition duration-300 hover:scale-110 ">
      <img alt="Movie card"
      src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
