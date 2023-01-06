import {useEffect, useState} from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



 const ApiSimpsons = () => {
    
    
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    
    
    
    // const [refresh, setRefresh] = useState(0);
    
    const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/simpsons/episodes');
    const json = await resp.json();
    const dataConPrecio = json.map(item =>{return {...item, Price:350, Qty: 100 }})
    setData(dataConPrecio);
  }

  
    

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

         <strong onClick={All}><h1 className='ml-20 bg-slate-900 text-white w-fit rounded-full p-4 hover:cursor-pointer'>ALL</h1></strong>

         <section className='text-center marginL'>
          {filterData.length > 0  ? 
             
             
             filterData.map(homer =>  <><div className='w-56 flex flex-col justify-center mb-7 border-solid border border-slate-800 pb-4'>
             <h1 key={homer.id}>{homer.name}</h1>
             
             <img className='' src={homer.thumbnailUrl} alt="" />
             <p className='w'>{homer.description}</p>
             
             <div className='flex bg-slate-800'>
             <h1 className=' bg-slate-800 text-white inline ml-8'>Episodio Nro {homer.episode}</h1>
             <p className=' bg-slate-800 text-white ml-4'>${homer.Price}</p>
             </div>
             <h3 className=' bg-orange-900 text-white pb-1'>Temporada {homer.season}</h3><strong><p>Stock: {homer.Qty} unidades</p></strong>
             <Link to={`/DetailList/${homer.id}`}><strong><button className='rounded-full btn-accent p-3 text-white mt-2'>Ver Detalle</button></strong></Link>
             </div>
             

             </>
             )
            
            : 
             data.map(homer => <><div className='w-56 flex flex-col justify-center mb-7 border-solid border border-slate-800 pb-4'>
              <h1 key={homer.id}>{homer.name}</h1>
              
              <img className='' src={homer.thumbnailUrl} alt="" />
              <p className='w'>{homer.description}</p>
              
              <div className='flex bg-slate-800'>
              <h1 className=' bg-slate-800 text-white inline ml-8'>Episodio Nro {homer.episode}</h1>
              <p className=' bg-slate-800 text-white ml-4'>${homer.Price}</p>
              </div>
              <h3 className=' bg-orange-900 text-white pb-1'>Temporada {homer.season}</h3><strong><p>Stock: {homer.Qty} unidades</p></strong>
              <Link to={`/DetailList/${homer.id}`}><strong><button className='rounded-full btn-accent p-3 text-white mt-2' >Ver Detalle</button></strong></Link>
              </div>
              

              </>
              )
            }
            </section>
             
             
             
             {
              data.length > 0 &&  <Footer/>
             } 
       
       
       
        </>
          
    );
  };
  
  export default ApiSimpsons;