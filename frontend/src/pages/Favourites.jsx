import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    //get favourite IDs from localstorage
    const favs = JSON.parse(localStorage.getItem('favourites')) || [];
    //filter the dummy data to match only favourites
    const favMovies = dummyShowsData.filter(movie => favs.includes(movie._id))
    setFavourites(favMovies);
  }, [])

  return favourites.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44
    overflow-hidden min-h-[80vh]'>

      <BlurCircle top='150px' left='0px' />
      <BlurCircle bottom='50px' right='50px' />
      <h1 className='text-lg font-medium my-4'>Your Favourite Movies</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No favourites movie found</h1>
    </div>
  )
}

export default Favourites
