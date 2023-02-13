import homerImg from "../img/homer-img.png"
import {useContext, useEffect, useState} from 'react';
import {useParams, Link } from 'react-router-dom';
import { ContextApp } from './Context';
import NavBar from './NavBar';
import Swal from 'sweetalert2';
import axios from 'axios';
import homerEnojado from "../img/Simpsons/homeroEnojado.jpg"



    



const DetailList = () => {
    
  const [findData, setFindData] = useState({});
  const {counter, setCounter, addToCart, cart, setMjeEmptyCart, setMjeCartVacio, language, setImgCartVacio} = useContext(ContextApp);  
    
  const { idSimpson } = useParams ();     
    
    const getData = async () => {
        
      try{
      const resp = await axios.get('https://api.sampleapis.com/simpsons/episodes');
        // Here on the second parameter of this axios.get function it should be placed this object with the required "q" params (query params), as it was described on the assessment.
      // { 
      //   params: {
      //    q: "q"
      //   }
      // }

        const dataConPrecio = resp.data.map(item =>{return {...item, Price:350, Qty: 100 }})
        const findChapter = dataConPrecio.find(apu => apu.id == idSimpson);
        setFindData(findChapter);
      }
        catch(error){
        console.log(error);
    }
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
       
        {language == true? 
          Swal.fire({
          icon: 'success',
          
          title: `Your Chapter: <strong><i>${findData.name}</strong></i>, has been succesfully added to your Cart. ${counter} units.`,
          
        }) : 
        
        Swal.fire({
          icon: 'success',
          
          title: `Su capítulo: <strong><i>${findData.name}</strong></i>, se ha añadido correctamente al Carrito. ${counter} unidades.`,
          
        });}

        

       addToCart(findData, qty);

       setMjeEmptyCart('Come on Flanderrrssssssss Confirm the Order!! ');
       setMjeCartVacio('Ya haz la maldita compra Flanderrrssssssss!! ');
       setImgCartVacio(homerEnojado);
       
       setCounter(0);


       }
               
     console.log(cart);
    
    return (
        <>
         
         <NavBar/>
         

         <article className="max-[450px]:flex-col-reverse max-[450px]:ml-auto max-[450px]:mt-10  flex justify-center">
         <div className="max-[450px]:m-auto max-[450px]:mt-10 mr-64">
         <Link to="/Simpsons"><img src={homerImg} className='max-[450px]:ml-[30%] max-[450px]:h-[92px] max-[450px]:w-[60px] inline ml-10  mt-3 hover:cursor-pointer w-[45px] h-[65px]'/></Link>
         <p className="max-[450px]:text-sm text-xs ml-3">{language == true? "Click on Homer": "Haz click en Homero"}</p>
         <p className="max-[450px]:text-sm text-xs ml-3">{language == true? "to continue your shopping...": "para continuar tu compra..."}</p>
         </div>

         { findData == undefined ? <p>{language == true? "Loading...": "Cargando..."}</p> :
          <>
           <section className="max-[450px]:mb-20 max-[450px]:m-auto mr-[405px] mt-5">
            <div className='text-center'>
                <h1>{findData.name}</h1>
                <div className='text-center'>
                <img className='max-[450px]:w-[280px] inline' src={findData.thumbnailUrl || ""} alt="" />
                </div>
                <p>{language == true? "Chapter ID:": "Cápitulo ID:"} {findData.id}</p>   
             </div>

            
            <div className='flex justify-center gap-7 mt-5'>
                
             <strong><button className='btn-circle btn-accent btn-sm ml-10 text-white' onClick={sumar}>+</button></strong>
             <span>{counter}</span>
             <strong><button className='btn-circle btn-accent btn-sm mr-10 text-white' onClick={restar}>-</button></strong>
             </div>
             <div className='text-center mt-4'>
             <p className='bg-black text-white rounded-full inline p-2  w-fit hover:cursor-pointer hover:text-yellow-300' onClick={()=>addToCartBoton(counter)}>{language == true? "ADD TO CART": "AGREGAR AL CARRO"}</p>
             </div>

             </section>
             </>
              
    }

        </article>
            
        </>
    );
};

export default DetailList;