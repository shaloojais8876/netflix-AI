import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[10];

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="bg-black pt[30%] md:pt-0 lg:pt-12">
      {/* Video Title Section */}
      <VideoTitle title={original_title} overview={overview} />

      {/* Video Background Section */}
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
