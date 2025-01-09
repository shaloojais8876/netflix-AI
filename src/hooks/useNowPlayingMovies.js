import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      //if my now playing movies is not there then only make an api call
      // (once the data is there then dont need to make an api call).{the concept of Memoization}
      //In easy words these will only be called when my nowPlayingMovies not have the data.Once it hv it won't get call again n again!
    !nowPlayingMovies && getNowPlayingMovies();
  
    }, []);
};

export default useNowPlayingMovies;