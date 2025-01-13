import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+
      movie +
       "&include_adult=false&language=en-US&page=1",
       API_OPTIONS
    );
    const json = await data.json();
    return JSON.results;
  }

  const handleGptSearchClick = async () => {
       console.log(searchText.current.value);
       //Make an API call to openai and get Movie results!

       const gptQuery ="Act as a Movie Recommendation Syetem ans suggest some movies for the query" 
       + searchText.current.value +
       ". only give me names of 5 movies, comma separated like the example ahead. Example Results: Srikanth, Saina, Gunjan Saxena, Marry kom, Manjhi";
 
       const gptResults = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: gptQuery }],
      });
       //Error Handling
      if (!gptResults.choices || !gptResults.choices[0]?.message?.current) {
      }
      
      console.log(gptResults.choices?.[0]?.message?.content);
     //Srikanth, Saina, Gunjan Saxena, Marry kom, Manjhi
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      //after using split it will shows movies in array with comma separated string ["Srikanth", "Saina", "Gunjan Saxena", "Marry kom", "Manjhi"]
  

      //for each gptmovies i'll call my searchMovieTMDB i have to pass a movie(movie=srikanth)

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      
      //passing an object
      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults}));
      
    };
  return (
    <div className=" pt-[80%] md:pt-[10%] flex justify-center">
      <form className=" w-full md:w-1/2 bg-black grid grid-cols-12 mt-6 "
       onSubmit={(e) => e.preventDefault()}
       >
        <input
        ref = {searchText}
        type="text"
        className="p-4 m-4 col-span-9"
        placeholder= {lang[langkey].gptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-700 text-white rounded-lg m-4 py-2 px-4 text-sm sm:text-base truncate"
         onClick={ handleGptSearchClick }>
          {lang[langkey].search}
        </button>


      </form>
    </div>
  )
}

export default GptSearchBar;
