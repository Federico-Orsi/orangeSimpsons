import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';



export const ContextApp = createContext();





const Context = (props) => {
    
    
    
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);

    
    const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/simpsons/episodes');
    const json = await resp.json();
    const dataConPrecio = json.map(item =>{return {...item, Price:350, Qty: 100 }})
    setData(dataConPrecio);
    
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



    
    return (
        <>
            <ContextApp.Provider value={{data, setData, badgeCounter, deleteFromCart, counter, setCounter, addToCart, cart, setCart, filterData, setFilterData, getData}}>
            {props.children}

            </ContextApp.Provider>

     </>
    );
};

export default Context;