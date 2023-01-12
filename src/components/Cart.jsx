import React from 'react';
import NavBar from './NavBar';
import {useContext, useState} from 'react';
import { ContextApp } from './Context';
import homerImg from "../img/homer-img.png"
import Footer from './Footer';





const Cart = () => {

    
    
    const {cart, deleteFromCart, vaciarCarro, mjeEmptyCart} = useContext(ContextApp); 
    
    console.log(cart);
    
    
    const calcularPrecioNetodelItem = (precio, cant) => precio*cant

    const calcularSubtotalNeto = () => {

       const subtotalCart = cart.map(homer => homer.qtyItem * homer.priceItem );
       return subtotalCart.reduce((bart,lisa) => bart + lisa, 0);
    }

    const calcularIva = () =>{

        const subtotalCart = cart.map(homer => homer.qtyItem * homer.priceItem );
        const iva = subtotalCart.reduce((bart,lisa) => bart + lisa, 0);
        return iva*0.21
    }
    
     const calcularValorFinal = () =>{

        const subtotalCart = cart.map(homer => homer.qtyItem * homer.priceItem );
        const iva = subtotalCart.reduce((bart,lisa) => bart + lisa, 0);
        return iva*1.21
    }

    
    
    
    
    return (
        <>
            <NavBar/>
           
            <article  className='max-[450px]:flex-col-reverse flex justify-around'>
            
            <div className='text-center mt-7'>
            {
             cart.length > 0  &&   <u><h1 className='mb-4 mt-1'>Detalle de tu Carrito:</h1> </u>  
            }
            

            {
                cart.length > 0 ? 
              
                
                cart.map(elem => 
                    
                    <div key={elem.id} className="max-[450px]:m-auto max-[450px]:mb-5 text-center mb-3 border-solid border border-slate-800 w-fit"> 
                    
                    <strong><h1>{elem.nameItem}</h1></strong>
                    <img src={elem.pictureItem} className="inline" alt="" />
                    <div>
                    <p className=' bg-black text-white'>Unidades: {elem.qtyItem}</p>
                    <p className=' bg-emerald-900 text-white'>Total del item: ${calcularPrecioNetodelItem(elem.priceItem, elem.qtyItem)}</p>
                    </div>
                    <button className='text-white bg-red-600 hover:cursor-pointer rounded-full p-1 pr-4 pl-4' onClick={()=>deleteFromCart(elem.idItem)}>Eliminar item</button>
                    
                  </div>
                
               ) : <div className='text-center mt-8'>
                   <p>{mjeEmptyCart}</p>
                </div>
              
             }   
             
             </div>       
            
            
            
            {
                cart.length > 0  && 

                
                
                <div style={{height:"229px" , paddingLeft:""}} className="max-[450px]:w-[380px] max-[450px]:m-auto w-[500px] card card-side bg-base-100 shadow-xl mr-16 mt-8">
                <figure><img src={homerImg} style={{height:"173px" , width:"90px", paddingLeft:"9%"}} alt="Movie"/></figure>
                <div className="card-body">
                <u><h2 className="card-title">Resumen de tu compra:</h2></u>
                <p>Subtotal Neto: ${calcularSubtotalNeto()}</p>
                <p>IVA (21%): ${calcularIva()}</p>
                <p>Total a abonar: ${(calcularValorFinal().toFixed(2))}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-accent text-white" onClick={vaciarCarro}>Confirmar Orden</button>
                </div>
                </div>
                </div>
                
            
            }

               
        </article>    


        {
             cart.length > 0  &&  <Footer/>
        }
             
            
            
           
        </>
    );
};

export default Cart;