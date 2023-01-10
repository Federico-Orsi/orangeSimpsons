import homerImg from "../img/homer-img.png"
import {useContext, useEffect, useState} from 'react';
import {useParams, Link } from 'react-router-dom';
import { ContextApp } from './Context';
import NavBar from './NavBar';
import Swal from 'sweetalert2';




    



const DetailList = () => {
    
  const [findData, setFindData] = useState({});
  const {counter, setCounter, addToCart, cart} = useContext(ContextApp);  
    
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

       
       const addToCartBoton = (qty) =>{
       
        Swal.fire({
          icon: 'success',
          title: `Su capítulo: <strong><i>${findData.name}</strong></i>, se ha añadido correctamente al Carrito. ${counter} unidades.`,
          
        });

       addToCart(findData, qty);
       setCounter(0);


       }
               
     console.log(cart);
    
    return (
        <>
         
         <NavBar/>

         <Link to="/Simpsons"><img src={homerImg} className='inline ml-10  mt-3 hover:cursor-pointer' style={{height:"65px" , width:"45px"}} alt="" /></Link>
         <p className="text-xs ml-3">Haz click en Homero</p>
         <p className="text-xs ml-3">para seguir con tu compra...</p>


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
             <p className='bg-black text-white rounded-full inline p-2  w-fit hover: cursor-pointer' onClick={()=>addToCartBoton(counter)}>AGREGAR AL CARRO</p>
             </div>


             </>
              
    }
            
        </>
    );
};

export default DetailList;