import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import FedeCVEspañol from "../img/CV FedericoOrsi-Español.pdf";
import FedeCV from "../img/CV FedericoOrsi_english.pdf";
import Apu from "../img/Simpsons/Apu.png";
import BenderMoes from "../img/Simpsons/BenderMoes.jpg";
import Moe from "../img/Simpsons/Moe.jpg";
import MoeTabern from "../img/Simpsons/MoesTabern.jpg";
import MrBurns from "../img/Simpsons/MrBurns.png";
import SimpFamily from "../img/Simpsons/SimpsonsFamily.jpg";
import barnyLeniCarl from "../img/Simpsons/barnyLeniCarl.jpg";
import ComicNerd from "../img/Simpsons/comicsNerd.jpg";
import homerImg from "../img/homer-img.png";
import allCharacters from "../img/simpsonsAllCharacters.jpeg";
import introMp3 from "../img/television-simpsons.mp3";
import { ContextApp } from './Context';






const Home = () => {
    
    
    const {language} = useContext(ContextApp); 
    
    return (
        <>
    <NavBar/>    
    
    <audio src={introMp3} controls className='w-[28%] m-auto mt-10' ></audio>
    
    
    <div className='flex justify-around mt-10 mr-10'> 
    <Link to="/Simpsons"><img src={homerImg} className='inline ml-10  mt-3 hover:cursor-pointer' style={{height:"78px" , width:"48px"}} alt="" /></Link>
    <div className='mt-[2.5rem]'> 
    { language == true?
    <a className='bg-black text-white rounded-full p-4 hover:text-yellow-300' href={FedeCV} download={""}>{language == true? "Developer CV": "CV del Desarrollador"}</a>
    : <a className='bg-black text-white rounded-full p-4 hover:text-yellow-300' href={FedeCVEspañol} download={""}>{language == true? "Developer CV": "CV del Desarrollador"}</a>     
} 
    </div>
    </div>
    <div className='p-14'>
    <p className='text-center robotoStrong'>{language == true? "Welcome to your Simpsons App!!": "Bienvenido a tu App de los Simpsons!!"}</p>
    {/* <p className='mt-10 roboto'>Especializándonos en<span className='robotoStrong'> branding, comunicación </span> y <span className='robotoStrong'>diseño</span> de proyectos digitales, construimos soluciones visuales, que agregan valor a empresas, productos y servicios.</p> */}
    <p className='m-auto text-center mt-4'>{language == true? "Make click on Homer's Avatar and start your Site Tour... Let's Goo!!": "Haz click en Homero y comienza tu recorrido por el Sitio... Vamos!!"}</p>
    </div>
    
    
    

    
    
    
    <div className='max-[450px]:flex-col max-[450px]:ml-3 max-[450px]:gap-3  max-[450px]:m-auto flex justify-around mt-7 '>
     <img src={SimpFamily} className="md:w-[14rem] lg:w-[20rem]" />
     <img src={allCharacters} className="md:w-[14rem] lg:w-[20rem]"/>
     <img src={MoeTabern} className="max-[450px]:mb-3 md:w-[14rem] lg:w-[20rem]"/>
     </div>
    <div className='max-[450px]:justify-around max-[450px]:flex-col max-[450px]:m-auto max-[450px]:ml-2 max-[450px]:gap-3 flex justify-evenly mt-7'>
     <img src={MrBurns} className="inline-block md:w-[14rem] lg:w-[20rem]"/>
     <img src={barnyLeniCarl} className="inline-block md:w-[14rem] lg:w-[20rem]"/>
     <img src={Apu} className="max-[450px]:mb-3 inline-block md:w-[14rem] lg:w-[20rem] h-96"/>
     </div>
     <div className='max-[450px]:flex-col max-[450px]:m-auto max-[450px]:ml-2 max-[450px]:gap-3 flex justify-around mt-7'>
     <img src={Moe} className="inline-block md:w-[14rem] lg:w-[20rem] h-96"/>
     <img src={BenderMoes} className="inline-block md:w-[14rem] lg:w-[20rem] h-96"/>
     <img src={ComicNerd} className="max-[450px]:mb-3 inline-block md:w-[14rem] lg:w-[20rem] h-96"/>
     </div>
     {/* <div className='max-[450px]:justify-around max-[450px]:flex-col max-[450px]:m-auto max-[450px]:ml-2 max-[450px]:gap-3 flex justify-evenly mt-7'>
     <img src={img10} className="inline-block w-96 h-96"/>
     <img src={img11} className="inline-block w-96 h-96"/>
     <img src={img12} className="max-[450px]:mb-3 inline-block w-96 h-96"/>
     </div>
     <div className='max-[450px]:flex-col max-[450px]:ml-2 max-[450px]:gap-3 max-[450px]:m-auto flex justify-around mt-7'>
     <img src={img13} className="inline-block w-96 h-96"/>
     <img src={img14} className="inline-block w-96 h-96"/>
     <img src={img15} className="max-[450px]:mb-3 inline-block w-96 h-96"/>
     </div>*/}
     <Footer/> 
     </>
    );
};

export default Home;