import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { createImageUrl } from "../services/movieServices";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };


  const handleUnlikeShow = async(movie) =>{
    const userDoc =doc(db,'users', user.email) 

    await updateDoc(userDoc,{
      favShows: arrayRemove(movie),
    })

  }

  if (!user) {
    return <p>Fetching Shows....</p>;
  }

  return (
    <div>
      <div>
        <img
          className="block w-full h-[150] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="//"
        />
        <div className="bg-black absolute top-0 left-0 w-full h-[600px] opacity-80" />
        <div className="absolute top-[20%] font-nsans-bold my-2">
          <h1 className="text-3xl md:text-5xl font-nsans-bold my-2">
            My Favourite Shows
          </h1>
          <p className="font-nsans-light text-gray-400 text-lg">{user.email}</p>
        </div>
      </div>

      {/* movie row */}

      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">My Shows</h2>

      <div className="relative flex item-center group">
        <MdChevronLeft
          onClick={() => slide(-500)}
          className="bg-white rounded-full absolute left-2 opacity-80 z-10 text-gray-700 hidden group-hover:block cursor-pointer "
          size={40}
        ></MdChevronLeft>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280-px] inline-block overflow-hidden cursor-pointer px-2 rounded"
            >
              <img
                className="rounded w-full h-40 block object-cover object-top"
                src={createImageUrl(movie.backdrop_path ?? movie.poster_path, "w500")}
                alt={movie.title}
              />
              <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 ">
                <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
                  {movie.title}
                </p>

                <p>
                  <AiOutlineClose
                    size={30}
                    onClick={()=>handleUnlikeShow(movie)}
                    className="absolute top-2 right-2"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          className="bg-white rounded-full absolute right-2 opacity-80 z-10 text-gray-700 hidden group-hover:block cursor-pointer "
          size={40}
        ></MdChevronRight>
      </div>
    </div>
  );
};

export default Profile;
