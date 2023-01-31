import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';






 const TestApi = () => {
    
  const [img, setImg] = useState();
  const [img2, setImg2] = useState();
  const [page, setPage] = useState(9);
  const [posterSimp, setPosterSimp] = useState();
  
  
  
  const allCharacters = async () => {

  const resp = await axios.get("https://rickandmortyapi.com/api/character")    
  console.log(resp)
  const showSingleImg = resp.data.results[9].image;
  setImg(showSingleImg);

}

 const nextPage = async () => {
  
    const resp = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)    
    console.log(resp)
    const showNextPage = resp.data.results[9].image;
    setImg2(showNextPage);

 }
 
 useEffect(() => {
        
        allCharacters(); 
        

 }, []);

 
 useEffect(() => {
        
    
    nextPage();

}, [page]);


 
 

    return (
        <>
        <NavBar/>
         <div className='m-auto'>
         <img className='m-auto' src={img} alt="" />
         <div className='flex justify-center mt-5'>
         <strong><button className='mr-10 mt-32 btn-circle btn-accent btn-sm text-white' onClick={() => setPage(page-1)}>-</button></strong>
         <img className='m-0 inline mt-5' src={img2} alt="" />
         <strong><button className='mt-32 btn-circle btn-accent btn-sm ml-10 text-white' onClick={() => setPage(page+1)}>+</button></strong>
         </div>
         </div>

         
        </>
    );
};

export default TestApi;


