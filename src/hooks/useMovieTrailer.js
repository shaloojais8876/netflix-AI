import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
 
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
     const trailerVideo = useSelector((store) => 
      store.movies.trailerVideo
      );


    //fetch trailer video && updating the store
 const getMovieVideos = async () => {
       const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
        movieId + "/videos?language=en-US",
        API_OPTIONS 
       );
       const json = await data.json();

       const filterData = json.results.filter((video) => video.type === "Trailer");
       const trailer = filterData.length ? filterData[0] : json.results[9];
       dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      //when trailerVideo is empty then only make an api call.(Memoization)
     !trailerVideo && getMovieVideos();
   }, []);
}

export default useMovieTrailer;
