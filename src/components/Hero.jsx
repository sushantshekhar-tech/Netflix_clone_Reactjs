import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../services/movieServices';

const Hero = () => {
    const [movie,setMovie]=useState({});

    useEffect(()=>{

axios.get(endpoints.popular).then((response)=>{
   
const movies=response.data.results;//getting the result of the movie from the API
const randomMovies=movies[Math.floor(Math.random() * movies.length)]; // math to select any random movie
setMovie(randomMovies);//setting movie in the use state

})

    },[]);

    const truncate =(str,length)=>{
      if(!str) return "";
       
      return str.length> length ? str.slice(0,length)+'...':str;
    }//making a function in overview soo that if the particular string is more than of a certain length it will cut it off and return smaller amount of string 

    if(!movie)
    return(
  <>
  <p>fetching movie....</p>
  </>);

const { title,backdrop_path , release_date ,overview}= movie;

  return (


    <div className='w-full h-[500px] lg:h-[850px]'> 


<div className='absolute w-full h-[500px] lg:h-[850px] bg-gradient-to-r from-black'/>
<img className='w-full object-cover object-top'
  src={createImageUrl(backdrop_path,"original")} 
  alt={title} />

  <div  className='absolute w-full top-[20%] lg:top-[25%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-6xl font-nsans-bold'>{title}</h1>
    <div className='mt-8 mb-4 '>
      <button className="capitalize  text-black font-nsans-bold border bg-gray-300 py-2 px-5 ml-4  rounded">Play</button>
      <button className="capitalize border  font-nsans-bold border-gray-300 py-2 px-5 ml-4 rounded">Watch Later</button>
      <p className='text-gray-400 py-5 text-sm'>{release_date}</p>
      <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview,165)}</p>
    </div>
  </div>
</div>


  );
};

export default Hero