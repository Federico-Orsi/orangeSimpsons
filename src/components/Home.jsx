import React from 'react';
import NavBar from '../components/NavBar';
import img1 from "../img/ACTIVIDAD PINZAS.jpg"
import hanniLogo from "../img/hanniLogo.gif"
import img3 from "../img/BOLSA CARONELLA.jpg"
import img4 from "../img/BOLSA LA BICI.jpg"
import img5 from "../img/BOLSAS HANI 2.jpg"
import img6 from "../img/CARATULA-1--MOCK.jpg"
import img7 from "../img/CARATULA-1--MOCK.jpg"
import img8 from "../img/COFFE LA BICI.jpg"
import img9 from "../img/DIPLOMA-1-MOCK.jpg"
import img10 from "../img/DIPLOMA-2-MOCK.jpg"
import img11 from "../img/DIPTICOS ACON 2.jpg"
import img12 from "../img/DIPTICOS ACON 3.jpg"
import img13 from "../img/DIPTICOS ACON 4.jpg"
import img14 from "../img/DIPTICOS ACON.jpg"
import img15 from "../img/EBOOK TAPA.jpg"
import Footer from '../components/Footer';
import homerImg from "../img/homer-img.png"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
    <NavBar/>    
    
    
    
    <div className='flex justify-between mt-10 mr-20'>
    <Link to="/Simpsons"><img src={homerImg} className='inline ml-10  mt-3 hover:cursor-pointer' style={{height:"65px" , width:"45px"}} alt="" /></Link>
    <div className='mt-6'>
    <a className='bg-black text-white rounded-full p-4' href="../MANUAL MARCA-LOGO ROMINA PLEZ.pdf" download={""}>Manual de Marca</a>
    </div>
    </div>
    <div className='p-14'>
    <p className='text-center robotoStrong'>Convertimos tus ideas en Realidad!!</p>
    <p className='mt-10 roboto'>Especializándonos en<span className='robotoStrong'> branding, comunicación </span> y <span className='robotoStrong'>diseño</span> de proyectos digitales, construimos soluciones visuales, que agregan valor a empresas, productos y servicios.</p>
    </div>
    
    
    <div className='flex justify-around mt-7 '>
     <img src={img1} className="w-96 h-96" />
     <img src={hanniLogo} className="w-96 h-96"/>
     <img src={img3} className="w-96 h-96"/>
     </div>
    <div className='flex justify-evenly mt-7'>
     <img src={img4} className="inline-block w-96 h-96"/>
     <img src={img5} className="inline-block w-96 h-96"/>
     <img src={img6} className="inline-block w-96 h-96"/>
     </div>
     <div className='flex justify-around mt-7'>
     <img src={img7} className="inline-block w-96 h-96"/>
     <img src={img8} className="inline-block w-96 h-96"/>
     <img src={img9} className="inline-block w-96 h-96"/>
     </div>
     <div className='flex justify-evenly mt-7'>
     <img src={img10} className="inline-block w-96 h-96"/>
     <img src={img11} className="inline-block w-96 h-96"/>
     <img src={img12} className="inline-block w-96 h-96"/>
     </div>
     <div className='flex justify-around mt-7'>
     <img src={img13} className="inline-block w-96 h-96"/>
     <img src={img14} className="inline-block w-96 h-96"/>
     <img src={img15} className="inline-block w-96 h-96"/>
     </div>
     <Footer/>
     </>
    );
};

export default Home;