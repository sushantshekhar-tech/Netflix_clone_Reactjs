import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItems from "./MovieItems";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url }) => {

const Rowid=Math.floor(Math.random() *1000);
//the slider only works for the first row but to control the rest of the row using the slider we need a random number between 1 and 1000 and add it to the id od the slider

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  const slide = (offset) =>{
const slider =document.getElementById('slider' + Rowid)
slider.scrollLeft=slider.scrollLeft+offset;

  }



  // console.log(movies);
  return (
    <>
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>

      <div className="relative flex item-center group">
        <MdChevronLeft onClick={()=>slide(-500)}    className="bg-white rounded-full absolute left-2 opacity-80 z-10 text-gray-700 hidden group-hover:block  cursor-pointer " size={40}></MdChevronLeft>
        <div
          id={"slider" + Rowid}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return <MovieItems key={movie.id} movie={movie}></MovieItems>;
          })}
        </div>
        <MdChevronRight onClick={()=>slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 z-10 text-gray-700 hidden group-hover:block cursor-pointer " size={40}></MdChevronRight>
      </div>
    </>
  );
};

export default MovieRow;
