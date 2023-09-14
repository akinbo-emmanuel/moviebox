import { useEffect, useState } from 'react'
import AsideBar from '../components/AsideBar'
import {GoDotFill} from 'react-icons/go'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {ScaleLoader} from 'react-spinners'

const Details = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    async function fetchMovieDetails(movieId) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`
          );
          setLoading(false);
          return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // Fetch movie details when the component mounts
        fetchMovieDetails(id)
            .then((data) => setMovie(data))
            .catch((error) => {
            console.error('Error fetching movie details:', error);
            });
    }, [id]);

    const movieReleaseDate = `${movie.release_date}`;
    const releaseDate = new Date(`${movieReleaseDate}T00:00:00Z`);
    const releaseDateUTC = releaseDate.toUTCString();

    // Assuming averageRating is fetched from your API
    let averageRating = movie.vote_average; // Replace this with your data fetching logic
    let roundedRating;

    // Check if averageRating is defined and is a number
    if (typeof averageRating === 'number' && !isNaN(averageRating)) {
        // Convert to two decimal places
        roundedRating = averageRating.toFixed(2);
    } else {
        console.error('Invalid averageRating:', averageRating);
    }



    if (loading) {
        return (
            <div className="flex">

                <div className='w-[18vw]'>
                    <AsideBar/>
                </div>

                <div className='lg:w-[82vw] p-4'>
                    <div className='bg-black/70 h-screen w-full fixed z-10 top-0 left-0'>
                        <ScaleLoader className='fixed top-[40%] left-[50%]' height="80" width="4" radius="3" color="crimson" aria-label="loading" wrapperstyle="true" wrapperclass="true"/>
                    </div>
                </div>
            </div>
        );
    }

  return (
    <div className='flex'>
      
      <div className='w-[18vw]'>
        <AsideBar/>
      </div>
      <div className='lg:w-[82vw] p-4'>
        {
            !movie ? (
                <div className='bg-black/70 h-screen w-full fixed z-10 top-0 left-0'><ScaleLoader className='fixed top-[40%] left-[50%]' height="80" width="4" radius="3" color="crimson" aria-label="loading" wrapperstyle="true" wrapperclass="true"/></div>
            ) : (
                <div>
                    <img
                        data-testid="movie-poster"
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                        alt={movie.title}
                        className=" w-full "
                    />
                    <div className='flex justify-between items-center pr-[3%] py-[2%]'>
                        <div className='flex justify-between items-center'>
                            {movie.title && <h2 data-testid = "movie-title" className = 'text-gray-900 text-[1.2rem] p-1'>{movie.title}</h2>}
                            <span className='text-gray-900 p-1'><GoDotFill size={12}/></span>
                            {releaseDateUTC && <p data-testid ="movie-release-date" className='text-gray-900 text-[1.2rem] p-1'>{releaseDateUTC}</p>}
                            <span className='text-gray-900 p-1'><GoDotFill size={12}/></span>
                            <h2 className='text-gray-900 text-[1.2rem] p-1'>PG-13</h2>
                            <span className='text-gray-900 p-1'><GoDotFill size={12}/></span>
                            {movie.runtime && <p data-testid = "movie-runtime" className='text-gray-900 text-[1.2rem] p-1'>{movie.runtime}</p>}
                            <p>mins</p>
                            <span className='text-gray-900 p-1'><GoDotFill size={12}/></span>
                            <p>Action</p>
                        </div>
                        <div>
                        <p className='flex items-center'><AiFillStar className='text-yellow-400 p-1' size={28}/><span className='text-gray-400 p-1'>{roundedRating}</span> | {movie.vote_count}</p> 
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        {/* Left */}
                        <div className=''>
                            <div>
                                <p data-testid = "movie-overview">{movie.overview}</p>
                            </div>
                            <div>
                                <p>Director: <span className='text-[#BE123C]'>Joseph Kosinski</span></p>
                                <p>Writers: <span className='text-[#BE123C]'>Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                                <p>Stars: <span className='text-[#BE123C]'>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                            </div>
                            <div>
                            </div>
                        </div>


                        <div>
                            
                        </div>
                        
                    </div>
                </div>
            )
        }
      </div>


      </div>
  )
}

export default Details
