import React, { useEffect } from 'react'; 
import axios from 'axios';
import homerImg from "../img/homer-img.png";
import { Link } from 'react-router-dom';


const Movie = () => {
    
    
    const getMovie = async () =>{

        

        const resp = await axios.get(`https://api.themoviedb.org/3/movie/35-the-simpsons-movie`, {
      
        params:{
          api_key: "b30c9a3b7db3a0ef4ad72f922cc53777",
          language: "en-MX",
        }
      })
       console.log(resp)
       
      }
       
       
       useEffect(()=>{
      
          getMovie();
       
      },[]);
         
    
    
    
    
    return (
        <>
            
         <article className=''>
          <img className='m-auto' src="https://image.tmdb.org/t/p/w500/gzb6P78zeFTnv9eoFYnaJ2YrZ5q.jpg" alt="" />
          <section className='flex justify-center'>
          <div className='max-[450px]:mr-6 mr-12'>
          <Link to="/"><img src={homerImg} className='max-[450px]:mt-10 max-[450px]:height-[500px]  inline mt-20 hover:cursor-pointer ml-11' onClick={() => window.scrollTo({top:0 , behavior: "smooth"})} style={{height:"65px" , width:"45px"}} alt="" /></Link>
          <p className='max-[450px]:mb-0 mb-20 text-sm'>Click me back to Home...</p>
          </div>
          <button className='max-[450px]:mb-14 max-[450px]:mt-12 max-[450px]:ml-0 btn-lg mt-20 ml-12 mb-20 rounded-full text-white hover:text-yellow-300 bg-black'><a className='p-2 m-auto' href="https://www.imdb.com/title/tt0462538/?ref_=ttvi_tt" target="_blank">Watch Trailer</a></button>
          
          </section>
          <img className='m-auto' src="https://image.tmdb.org/t/p/w500/8ln5VUVk7gnNGIb2VNgw8nICDVt.jpg" alt="" />
          
         </article>
         
          
          
         
         


        </>
    );
};

export default Movie;








