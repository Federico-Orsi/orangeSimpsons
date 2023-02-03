import React from 'react';
import { useContext } from "react";
import { ContextApp } from './Context';
import { Link } from 'react-router-dom';

const Footer = () => {
    
  const {language} = useContext(ContextApp); 
  
  
  
  return (
      // max-[450px]:h-[350px] max-[450px]:pt-20
        <> 
          <section className="max-[450px]:text-sm h-[225px] flex justify-around bg-black text-white pt-7">
       <div className="max-[450px]:w-[46%] mt-4">
       <Link to="/Contacto"><h6 className="hoover">{language == true? "CONTACT": "CONTACTO"}</h6></Link>
       <p style={{ fontSize: 'small'}} className="mt-5">Av. Siempre Viva 2400 - Springfield - USA </p>
       <p style={{ fontSize: 'small'}} className="hoover mt-2 mb-2" >homer@simpsonsfamily.com</p>
       <div style={{ fontSize: 'small'}}>
       <span>011 4829-3698</span>
       <span className="ml-3">{language == true? "Monday to Friday - 9 a 18hs": "Lunes a Viernes - 9 a 18hs"}</span>
       </div>
       
       </div>
       
       
       <div className="mt-4">
       <h6 className="hoover">{language == true? "DELIVERY": "ENVÍO"}</h6>
       <div style={{ fontSize: 'small'}} className="mt-5">
       <p className="bi bi-truck inline hoover"></p><span className="ml-2 hoover">{language == true? "FAQs": "Consultar"}</span>
       </div>
       
       </div>
       
       <div className="mt-4">
       <h6 className="hoover">{language == true? "MY ACCOUNT": "MI CUENTA"}</h6>
       <p style={{ fontSize: 'small'}} className="mt-5 hoover">{language == true? "Log in": "Ingresar"}</p>
       <p style={{ fontSize: 'small'}} className="hoover mt-2 mb-2">{language == true? "Register": "Registrarse"}</p>
       <p style={{ fontSize: 'small'}} className="hoover">{language == true? "Favorites": "Favoritos"}</p>
       </div>

      </section>
  
        </>
    );
};

export default Footer;