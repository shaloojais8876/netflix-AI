import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
  <div className="w-40 pr-4 transform transition duration-300 hover:scale-110 ">
      <img alt="Movie card"
      src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
