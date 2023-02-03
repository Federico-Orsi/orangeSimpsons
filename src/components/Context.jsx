import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


export const ContextApp = createContext();





const Context = (props) => {
    
  
    
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [language, setLanguage] = useState(false);
    const [mjeEmptyCart, setMjeEmptyCart] = useState('Ouchhh!! Your Cart is Empty!!');
    const [mjeCartVacio, setMjeCartVacio] = useState('Ouchhh!! Su carrito esta vacío!!');
    
    
    
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
      setData(dataConPrecio);
     } catch (error){
        console.log(error);
     }
      
    }
       
  
  
  
  const addToCart = (chapter, qty) =>{

  let cartFound = cart.find(elem => elem.idItem === chapter.id);
  
  
  if (cartFound == undefined) {setCart([...cart,

 {
  idItem: chapter.id,
  pictureItem: chapter.thumbnailUrl,
  nameItem: chapter.name,
  qtyItem: qty,
  priceItem: chapter.Price,
}

])} else {

cartFound.qtyItem += qty;
setCart([...cart])

}
}


 const deleteFromCart = (item) =>{

  const deleted = cart.filter(coso => coso.idItem != item );
  setCart(deleted)
 }

 
 const badgeCounter = () =>{
 
  const qtyCart = cart.map(elem => elem.qtyItem);
  return qtyCart.reduce((a,b) => a + b, 0)  

 }


 const vaciarCarro = () => {
  
  {language == true? 
    Swal.fire({
      icon: 'success',
      title: `Thank you very much for your Shopping!!.`,
      
    })
  :Swal.fire({
    icon: 'success',
    title: `Muchas gracias por su Compra!!.`,
    
  })
} 
  
  setCart([])
  setMjeEmptyCart("")
  setMjeCartVacio("")
}



    
    return (
        <>
            <ContextApp.Provider value={{data, setData, mjeCartVacio, setMjeCartVacio, setMjeEmptyCart, language, setLanguage, mjeEmptyCart, badgeCounter, vaciarCarro, deleteFromCart, counter, setCounter, addToCart, cart, setCart, filterData, setFilterData, getData}}>
            {props.children}

            </ContextApp.Provider>

     </>
    );
};

export default Context;