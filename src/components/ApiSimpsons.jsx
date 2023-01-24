import {useEffect, useContext} from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ContextApp } from './Context';
import introMp3 from "../img/television-simpsons.mp3"
 

 const ApiSimpsons = () => {
    
    
  const {data, filterData, setFilterData, getData} = useContext(ContextApp);  
  
    

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
         <button onClick={() =>filterSeason(1)}><strong>Temporada 1</strong></button>
         <h1 className='hover:cursor-pointer' onClick={() =>filterSeason(2)}><strong>Temporada 2</strong></h1>
         <strong onClick={() =>filterSeason(3)}><h1 className='hover:cursor-pointer'>Temporada 3</h1></strong>
         </div>

         <audio src={introMp3} controls className='max-[450px]:mb-4  w-[28%] mt-10 m-auto' ></audio>

         <strong onClick={All}><h1 className='max-[450px]:mb-5 max-[450px]:m-auto ml-20 bg-slate-900 text-white w-fit rounded-full p-4 hover:cursor-pointer'>ALL</h1></strong>

         
         
          
          {filterData.length > 0  ? 
             
             
             filterData.map(homer =>  <>
             <div key={homer.id} className='text-center inline'>
              <div className='w-56 mb-7 border-solid border border-slate-800 pb-4 m-auto'>
              <h1>{homer.name}</h1>
              
              <img className='inline' src={homer.thumbnailUrl || ""} alt="" />
              <p className='w'>{homer.description}</p>
              
              <div className='flex bg-slate-800'>
              <h1 className=' bg-slate-800 text-white inline ml-8'>Episodio Nro {homer.episode}</h1>
              <p className=' bg-slate-800 text-white ml-4'>${homer.Price}</p>
              </div>
              <h3 className=' bg-orange-900 text-white pb-1'>Temporada {homer.season}</h3><strong><p>Stock: {homer.Qty} unidades</p></strong>
              <Link to={`/DetailList/${homer.id}`}><strong><button className='rounded-full btn-accent p-3 text-white mt-2' >Ver Detalle</button></strong></Link>
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
              <h1 className=' bg-slate-800 text-white inline ml-8'>Episodio Nro {homer.episode}</h1>
              <p className=' bg-slate-800 text-white ml-4'>${homer.Price}</p>
              </div>
              <h3 className=' bg-orange-900 text-white pb-1'>Temporada {homer.season}</h3><strong><p>Stock: {homer.Qty} unidades</p></strong>
              <Link to={`/DetailList/${homer.id}`}><strong><button className='rounded-full btn-accent p-3 text-white mt-2' >Ver Detalle</button></strong></Link>
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