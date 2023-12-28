import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import endpoints from '../services/movieServices'

const Home = () => {
  return (
  <>
  
  <Hero></Hero>
  <MovieRow title="Upcoming" url={endpoints.upcoming}></MovieRow>
  <MovieRow title="Trending" url={endpoints.trending}></MovieRow>
  <MovieRow title="Top-rated" url={endpoints.topRated}></MovieRow>
  <MovieRow title="Comedy" url={endpoints.comedy}></MovieRow>
  <MovieRow title="Popular" url={endpoints.popular}></MovieRow>
  </>
  )
}

export default Home