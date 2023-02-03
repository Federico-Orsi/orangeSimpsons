import {useEffect, useContext} from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ContextApp } from './Context';
import introMp3 from "../img/television-simpsons.mp3"
 

 const ApiSimpsons = () => {
    
    
  const {data, filterData, setFilterData, getData, language} = useContext(ContextApp);  
  
    

    useEffect(() => {
    
    
      getData();
      
      

   }, []);

   
   
  
   
  
   console.log(data);
   
   
   
   
   
   const filterSeason = (temporada) => {
   
    
    const filtroPorSeason = data.filter(bart => bart.season === temporada);
    
    setFilterData(filtroPorSeason);     
      
      
 }

  
 const All = () => {

  setFilterData(data);
 }
   
 
   
   
      

    return (
        <>
       
         <NavBar/>
         <div className='flex justify-around mb-7'>
         <button onClick={() =>filterSeason(1)}><strong>{language == true? "Season 1": "Temporada 1"}</strong></button>
         <h1 className='hover:cursor-pointer' onClick={() =>filterSeason(2)}><strong>{language == true? "Season 2": "Temporada 2"}</strong></h1>
         <strong onClick={() =>filterSeason(3)}><h1 className='hover:cursor-pointer'>{language == true? "Season 3": "Temporada 3"}</h1></strong>
         </div>

         <audio src={introMp3} controls className='max-[450px]:mb-4  w-[28%] mt-10 m-auto' ></audio>

         <strong onClick={All}><h1 className='max-[450px]:mb-5 max-[450px]:m-auto ml-20 bg-slate-900 text-white w-fit rounded-full p-4 hover:cursor-pointer'>{language == true? "ALL": "TODOS"}</h1></strong>

         
         
          
          {filterData.length > 0  ? 
             
             
             filterData.map(homer =>  <>
             <div key={homer.id} className='text-center inline'>
              <div className='w-56 mb-7 border-solid border border-slate-800 pb-4 m-auto'>
              <h1>{homer.name}</h1>
              
              <img className='inline' src={homer.thumbnailUrl || ""} alt="" />
              <p className='w'>{homer.description}</p>
              
              <div className='flex bg-slate-800'>
              <h1 className=' bg-slate-800 text-white inline ml-7'>{language == true? "Episode N° ": "Episodio Nro "} {homer.episode}<span className='ml-3'>-</span></h1>
              <p className=' bg-slate-800 text-white ml-3'>${homer.Price}</p>
              </div>
              <h3 className=' bg-orange-900 text-white pb-1'>{language == true? "Season": "Temporada"} {homer.season}</h3><strong><p>Stock: {homer.Qty} {language == true? "units": "unidades"}</p></strong>
              <Link to={`/DetailList/${homer.id}`}><strong><button className='rounded-full btn-accent p-3 text-white mt-2' >{language == true? "Show Detail": "Ver Detalle"}</button></strong></Link>
              </div>
              </div>

             </>
             )
            
            : 
             data.map(homer => <>
              <div key={homer.id} className='text-center inline'>
              <div className='w-56 mb-7 border-solid border border-slate-800 pb-4 m-auto'>
              <h1>{homer.name}</h1>
              
              <img className='inline' src={homer.thumbnailUrl || ""} alt="" />
              <p className='w'>{homer.description}</p>
              
              <div className='flex bg-slate-800'>
              <h1 className=' bg-slate-800 text-white inline ml-7'>{language == true? "Episode N°": "Episodio Nro"} {homer.episode}<span className='ml-3'>-</span></h1>
              <p className=' bg-slate-800 text-white ml-3'>${homer.Price}</p>
              </div>
              <h3 className=' bg-orange-900 text-white pb-1'>{language == true? "Season": "Temporada"} {homer.season}</h3><strong><p>Stock: {homer.Qty} {language == true? "units": "unidades"}</p></strong>
              <Link to={`/DetailList/${homer.id}`}><strong><button className='rounded-full btn-accent p-3 text-white mt-2' >{language == true? "Show Detail": "Ver Detalle"}</button></strong></Link>
              </div>
              </div>

              </>
              )
            }
            
            
             
             
             
             {
              data.length > 0 &&  <Footer/>
             } 
       
       
       
        </>
          
    );
  };
  
  export default ApiSimpsons;