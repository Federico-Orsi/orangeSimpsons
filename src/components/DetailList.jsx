import React from 'react';
import {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {useParams } from 'react-router-dom';


    



const DetailList = () => {
    
    
    
     const [findData, setFindData] = useState({});
     const [counter, setCounter] = useState(0);

     const { idSimpson } = useParams ();

    
    const getData = async () => {
        const resp = await fetch('https://api.sampleapis.com/simpsons/episodes');
        const json = await resp.json();
        const dataConPrecio = json.map(item =>{return {...item, Price:350, Qty: 100 }})
        const findChapter = dataConPrecio.find(apu => apu.id == idSimpson);
        setFindData(findChapter);
      }
    
      
        
    
        useEffect(() => {
        
        
          getData();
          
    
       }, []);
    
    
     console.log(findData);
     


     
     
     
       const sumar = () =>{
        counter < 100  &&   setCounter(counter + 1 )
       }   
          
       const restar = () =>{
      
       counter > 0  &&  setCounter(counter - 1 )
       }   
               
    
    
    return (
        <>
         
         <NavBar/>
         { findData == undefined ? <p>Loading...</p> :
          <>
          
            <div className='text-center'>
                <h1>{findData.name}</h1>
                <div className='text-center'>
                <img className='inline' src={findData.thumbnailUrl} alt="" />
                </div>
                <p>Capítulo ID: {findData.id}</p>   
             </div>

            
            <div className='flex justify-center gap-7 mt-5'>
                
             <strong><button className='btn-circle btn-accent btn-sm ml-10 text-white' onClick={sumar}>+</button></strong>
             <span>{counter}</span>
             <strong><button className='btn-circle btn-accent btn-sm mr-10 text-white' onClick={restar}>-</button></strong>
             </div>
             <div className='text-center mt-4'>
             <p className='bg-black text-white rounded-full inline p-2  w-fit hover: cursor-pointer'>AGREGAR AL CARRO</p>
             </div>


             </>
              
    }
            
        </>
    );
};

export default DetailList;