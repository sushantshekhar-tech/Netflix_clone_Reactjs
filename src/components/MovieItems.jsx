import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import{arrayUnion,doc,updateDoc} from 'firebase/firestore'
import { db } from "../services/firebase";
import { UserAuth } from "../context/AuthContext";

const MovieItems = ({ movie }) => {
  const [Like, setLike] = useState(false);
  const { title, backdrop_path, poster_path } = movie;
  const{user}=UserAuth();

const markFavShow =async() =>{
  const userEmail=user?.email;

  if(userEmail){
    const userdoc=doc(db,'users',userEmail);
    setLike(!Like);
    await updateDoc(userdoc,{
      favShows:arrayUnion({...movie}),
    })
  }
  else{
    alert("Login to save a movie")
  }
}

  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280-px] inline-block  overflow-hidden cursor-pointer px-2 rounded">
      <img
        className="rounded w-full h-40 block object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={movie.title}
      />
      {/* Here we have use poster path for the images whose pictures are mot display in the screen  */}

      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 ">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
          {movie.title}
        </p>
        <p onClick={markFavShow} className="cursor-pointer">
          {
             Like? (
              <FaHeart size={20} className="absolute top-2 left-2 text-gray-200" />
              ):(
              <FaRegHeart
                size={20}
                className="absolute top-2 left-2 text-gray-200"
              />
              )
          }
         
        </p>
      </div>
    </div>
  );
};

export default MovieItems;
