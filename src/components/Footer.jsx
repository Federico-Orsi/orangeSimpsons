import React from 'react';

const Footer = () => {
    return (
        <>
          <section className="max-[450px]:text-sm max-[450px]:h-[350px] max-[450px]:pt-20 h-[225px] flex justify-around bg-black text-white pt-7">
       <div className="max-[450px]:w-[46%] mt-4">
       <h6 className="hoover">CONTACTO</h6>
       <p style={{ fontSize: 'small'}} className="mt-5">Av. Siempre Viva 2400 - CABA - Argentina </p>
       <p style={{ fontSize: 'small'}} className="hoover mt-2 mb-2" >info@orange-designstudio.com</p>
       <div style={{ fontSize: 'small'}}>
       <span>011 4829-3698</span>
       <span className="ml-3">Lunes a Viernes - 9 a 18hs</span>
       </div>
       
       </div>
       
       
       <div className="mt-4">
       <h6 className="hoover">ENVÍO</h6>
       <div style={{ fontSize: 'small'}} className="mt-5">
       <p className="bi bi-truck inline hoover"></p><span className="ml-2 hoover">Consultar</span>
       </div>
       
       </div>
       
       <div className="mt-4">
       <h6 className="hoover">MI CUENTA</h6>
       <p style={{ fontSize: 'small'}} className="mt-5 hoover">Ingresar</p>
       <p style={{ fontSize: 'small'}} className="hoover mt-2 mb-2">Registrarse</p>
       <p style={{ fontSize: 'small'}} className="hoover">Favoritos</p>
       </div>

      </section>
  
        </>
    );
};

export default Footer;