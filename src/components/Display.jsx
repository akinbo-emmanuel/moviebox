import { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import Cards from './Cards'
import {IoIosArrowForward} from 'react-icons/io'
import axios from 'axios'


const Display = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&page=1`
      );
      setMovies(response.data.results.slice(0, 10)); // Get the top 10 movies
      setLoading(true);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchMovies()
  },[])

  return (
    <div className='max-w-[1200px] mx-auto mt-[11em]'>
        <div className='flex justify-between tracking-wide items-center py-[6%]'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>Featured Movies</h1>
        <p className='text-rose-500 text-[1rem] flex items-center cursor-pointer'>See more <IoIosArrowForward className='mr-6' size={23}/></p>
        </div>
         { loading ? <Cards movies={movies} /> : <div className='bg-black/70 h-screen w-full fixed z-10 top-0 left-0'><ScaleLoader className='fixed top-[50%] left-[50%]' height="80" width="4" radius="3" color="crimson" aria-label="loading" wrapperstyle="true" wrapperclass="true" /></div> }
      </div>
  )
}

export default Display
