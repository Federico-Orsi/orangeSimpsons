import NavBar from './NavBar';
import milhouse from "../img/Simpsons/milhouse.png"
import milhouseWinner from "../img/Simpsons/milhouseWinner.jpg"
import nelson from "../img/Simpsons/nelson.png"
import rafaNariz from "../img/Simpsons/rafaDedoNariz.png"
import mcBain from "../img/Simpsons/mcBain.png"
import krostiAlegre from "../img/Simpsons/krostiAlegre.png"
import badKrosti from "../img/Simpsons/badKrosti.jpg"
import Duffman from "../img/Simpsons/Duffman.png"
import BartConPatineta from "../img/Simpsons/BartConPatineta.jpg"
import patineta1 from "../img/Simpsons/patineta1.jpg"
import patineta2 from "../img/Simpsons/patineta2.jpg"
import patinetaBart from "../img/Simpsons/patinetaBart.jpg"
import palanca from "../img/Simpsons/palanca.jpg"
import target from "../img/Simpsons/target.jpg"
import gradiente from "../img/Simpsons/gradiente.jpg"
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import {useContext} from 'react';
import { ContextApp } from './Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Badge from '@mui/material/Badge';


const Bart = () => {
    
  useEffect(()=>{
  AOS.init();
  }, [])


    const {validadorGame, setValidadorGame, language} = useContext(ContextApp);  
    

    const SuccesMilhouse = () =>{

        setMilHouse(milhouseWinner);
        setBadgeCounter(badgeCounter + 1)
        
        if (language == false){
          Swal.fire({
            icon: 'success',
            title: `Confiaba en ti Amigo!!`,
            
          })
        } else {

            Swal.fire({
                icon: 'success',
                title: `Heyyy Come on my Friend!!`,
                
              })
        }  
    }  

      const SuccesKrosti = () =>{

        setKrosti(krostiAlegre);
        setBadgeCounter(badgeCounter + 1)
        
        if (language == false){
        Swal.fire({
            icon: 'success',
            title: `Correcto!! En tu Cara Bob Patiño!!`,
            
          })
        } else {
            Swal.fire({
                icon: 'success',
                title: `Right!! In your Face Bob Patiño!!`,
                
              })

        }
    }  

      const SuccesBart = () =>{

        setBart(BartConPatineta);
        setBadgeCounter(badgeCounter + 1)
        
        if (language == false){
        Swal.fire({
            icon: 'success',
            title: `Ahi te ves Maestro!!`,
            
          })
         
      } else {
        Swal.fire({
            icon: 'success',
            title: `Yeahhh!! What's up Bro!!`,
            
          })
      }  
    }
        
      const Fail = () =>{
    
        setBadgeCounter(badgeCounter - 1)
       
        if (language == false){
        
        if(badgeCounter < 0){
            Swal.fire({
                icon: 'error',
                title: `Game Over!! Lo siento ${nombrePlayer}, con puntaje -2 quedas fuera del Juego!! Intenta nuevamente... `,
                
              })
              setValidadorGame(0)
            } else{
             Swal.fire({
            icon: 'error',
            title: `Ups!! Debes mirar mas episodios!!`,
            
          })
        } 
      } else {
     
        if(badgeCounter < 0){
            Swal.fire({
                icon: 'error',
                title: `Game Over!! I'm sorry ${nombrePlayer}, with 2 points below zero you're OUT!! Try again later... `,
                
              })
              setValidadorGame(0)
            } else{
             Swal.fire({
            icon: 'error',
            title: `Ups!! You should watch more episodes!!`,
            
          })
        } 
      }
}
// aqui termina la funcion Fail   


      const FailNelson = () =>{
    
        setBadgeCounter(badgeCounter - 1)

        if (language == false){
        
        if(badgeCounter < 0){
            Swal.fire({
                icon: 'error',
                title: `Game Over!! Lo siento ${nombrePlayer}, con puntaje -2 quedas fuera del Juego!! Intenta nuevamente... `,
                
              })
              setValidadorGame(0)
            } else{
             Swal.fire({
            icon: 'error',
            title: `Jaaajaaaaaaaaaaa!!`,
            
          })
        } 
    } else {
        if(badgeCounter < 0){
            Swal.fire({
                icon: 'error',
                title: `Game Over!! I'm sorry ${nombrePlayer}, with 2 points below zero you're OUT!! Try again later... `,
                
              })
              setValidadorGame(0)
            } else{
             Swal.fire({
            icon: 'error',
            title: `Haaahaaaaaaaaaaa!!`,
            
          })
        } 
    
    }
     
}  


      
    
    const [milHouse, setMilHouse] = useState(milhouse);
    const [krosti, setKrosti] = useState(badKrosti);
    const [bart, setBart] = useState(patinetaBart);
    const [badgeCounter, setBadgeCounter] = useState(0);
    const [nombrePlayer, setNombrePlayer] = useState("");
    const [iconValidator, setIconValidator] = useState("");
  
   
   

    const Comenzar = () =>{
   
        setMilHouse(milhouse)
        
        if(iconValidator == ""){
      Swal.fire({
        icon: 'error',
        title: `Ups!! Debes cargar tu Nombre o Apodo primero!!`,
        
      })
   } else{
   setValidadorGame(1)
   window.scrollTo({top:367 , behavior: "smooth"});
   setBadgeCounter(0)
   }
  }  
  
 
  const Siguiente = () =>{

    setValidadorGame(validadorGame + 1)
    setMilHouse(milhouse)
    setKrosti(badKrosti)
    setBart(patinetaBart)
   }  
   
   const Finalizar = () =>{

    setValidadorGame(0)
    setMilHouse(milhouse)
    setKrosti(badKrosti)
    setBart(patinetaBart)
    
    if (language == false){

    if(badgeCounter > 0){
    Swal.fire({
        icon: 'success',
        title: `Felicitaciones ${nombrePlayer}!! Lograste ${badgeCounter} puntos!!`,
        
      })
   }  else{
    Swal.fire({
        icon: 'error',
        title: `Gracias ${nombrePlayer} por completar el Juego!! Debes seguir practicando para sumar puntos!!`,
        
      })
   }
} else {

    if(badgeCounter > 0){
        Swal.fire({
            icon: 'success',
            title: `Congratulations ${nombrePlayer}!! You made ${badgeCounter} points!!`,
            
          })
       }  else{
        Swal.fire({
            icon: 'error',
            title: `Thanks ${nombrePlayer} for completing the Game!! You should practise more to achieve some point!!`,
            
          })
       }

} 
}
   


    
    return (
        <>
          <NavBar/>
          
          {/* The button to open modal */}
          { iconValidator == "" &&
             <div className='flex justify-center text-center m-auto mt-7'>
            <label htmlFor="my-modal" className='max-[450px]:mt-16 hover:cursor-pointer mt-7'><img className='h-[100px] w-[100px] ' src={target}  alt=""  /></label>
            <h1 className='max-[450px]:w-[60vw] max-[450px]:ml-7  mt-7 ml-10 text-yellow-300 py-10 pr-16 pl-32 w-[30%] clipPathIzquierda'   data-aos="fade-up-left" data-aos-duration="1500"  >{language == true? "Complete your data!!": "Introduce aquí tus datos!!"}</h1>

            </div>
}
          

           { (iconValidator == "A" || iconValidator == "B" || iconValidator == "C")  &&
            <div className='flex justify-center text-center m-auto mt-7 mr-40 relative'>
            
            <h1 className='max-[450px]:w-[57vw] max-[450px]:pr-[7rem] max-[450px]:pl-[2.75rem] mt-7 ml-48 text-yellow-300 py-10 pr-16 pl-7 clipPath'   data-aos="fade-up-right" data-aos-duration="3000">{language == true? "Let's see how much you know about the Simpsons!!": "Veamos cuanto sabes de los Simpsons!!"}</h1>
            { language == false?
            <button className='max-[450px]:rounded-full max-[450px]:w-[38%] max-[450px]:h-[100px] max-[450px]:m-7 max-[450px]:mt-[75px]  ml-14 mt-7 mr-28 mr bg-green-400 text-white p-4 clipPathComenzar' onClick={Comenzar} data-aos="fade-left"
            data-aos-offset="100"data-aos-easing="ease-in-sine" data-aos-duration="3000">Comenzar</button>
          :  <button className='max-[450px]:rounded-full max-[450px]:w-[38%] max-[450px]:h-[100px] max-[450px]:m-7 max-[450px]:mt-[75px] max-[450px]:p-[2rem]   ml-14 mt-7 mr-28 mr bg-green-400 text-white p-4 clipPathComenzar' onClick={Comenzar} data-aos="fade-left"
          data-aos-offset="100"data-aos-easing="ease-in-sine" data-aos-duration="3000">Play</button>
        }  
            </div>
}

            
            <article className='mt-20' id='containerQuiz'>
            
                {validadorGame == 0 && ""}
                {validadorGame == 1 &&
                <>

            <div className='flex justify-around relative'>   
            <Badge badgeContent={badgeCounter} className='max-[450px]:absolute max-[450px]:top-[275px] max-[450px]:left-[280px]  ml-10' color="primary">
            <img src={palanca} className='h-[50px] w-[50px] ' alt=""  />
            </Badge>
            
            <h2 className='max-[450px]:h-[38%] max-[450px]:mr-[33%] max-[450px]:ml-[9%] max-[450px]:rounded-lg max-[450px]:pb-[44px] m-auto text-center text-white ClipPathAzul1 p-3 pb-10' data-aos="zoom-in">{language == true? "Who is Bart's Best Friend!!": "Quien es el mejor amigo de Bart??"}</h2>
            </div> 
            {
             iconValidator == "A" &&   <h1 className='max-[450px]:top-[761px] max-[450px]:left-[2rem] ClipPathRombo p-[17px] text-white absolute top-[447px] left-40'>{nombrePlayer}</h1>
            }
        {
             iconValidator == "B" &&   <h1 className='max-[450px]:top-[761px] max-[450px]:left-[2rem] ClipPathRomboGradiente p-[17px] text-white absolute top-[447px] left-40 '>{nombrePlayer}</h1>
        }

        {
            iconValidator == "C" &&     <h1 className='max-[450px]:top-[761px] max-[450px]:left-[2rem] ClipPathRombo p-[17px]  text-yellow-300 absolute top-[447px] left-40'>{nombrePlayer}</h1>
        }

            <div  className='flex justify-around mt-8'>
                <img className='max-[450px]:h-[100px] max-[450px]:w-[26%] hover:cursor-pointer rounded-[1.5rem]' src={milHouse} onClick={SuccesMilhouse} alt="" />
                <img className='max-[450px]:h-[100px] max-[450px]:mr-[6%] hover:cursor-pointer' src={nelson} onClick={FailNelson} alt="" />
                <img className='max-[450px]:h-[100px] max-[450px]:mr-[5%] hover:cursor-pointer' src={rafaNariz} onClick={Fail} alt="" />
            </div>
            
            <div className='text-center mt-7'>
            <button className='m-auto mt-4 bg-green-400 text-white rounded-full p-3 hover:px-6' onClick={Siguiente}>{language == true? "Next": "Siguiente"}</button>
            </div>
            </>
}
            {validadorGame == 2 && 
            <>
            <div className='flex justify-around'>   
            <Badge badgeContent={badgeCounter} className='max-[450px]:absolute max-[450px]:top-[275px] max-[450px]:left-[280px] ml-10' color="primary">
            <img src={palanca} className='h-[50px] w-[50px] ' alt=""  />
            </Badge>
            <h2 className='max-[450px]:h-[38%] max-[450px]:mr-[33%] max-[450px]:ml-[9%] max-[450px]:rounded-lg max-[450px]:pb-[44px] m-auto text-center text-white ClipPathAzul rounded-md p-3 pb-6' data-aos="zoom-in-up">{language == true? "Who is Bart's Hero": "Quien es el ídolo de Bart??"}</h2>
            </div> 

            {
             iconValidator == "A" &&   <h1 className='max-[450px]:top-[761px] max-[450px]:left-[2rem] ClipPathRombo p-[17px] text-white absolute top-[447px] left-40'>{nombrePlayer}</h1>
            }
        {
             iconValidator == "B" &&   <h1 className='max-[450px]:top-[761px] max-[450px]:left-[2rem] ClipPathRomboGradiente p-[17px] text-white absolute top-[447px] left-40 '>{nombrePlayer}</h1>
        }

        {
            iconValidator == "C" &&     <h1 className='max-[450px]:top-[761px] max-[450px]:left-[2rem] ClipPathRombo p-[17px]  text-yellow-300 absolute top-[447px] left-40'>{nombrePlayer}</h1>
        }
            
       
            <div className='flex justify-around mt-8'>
                <img className='max-[450px]:h-[100px] max-[450px]:ml-[3%] hover:cursor-pointer' src={mcBain} onClick={Fail} alt="" />
                <img className='max-[450px]:h-[100px] max-[450px]:ml-[1%] hover:cursor-pointer' src={Duffman} onClick={Fail} alt="" />
                <img className='max-[450px]:h-[100px] max-[450px]:w-[22%] hover:cursor-pointer rounded-[1.5rem]' src={krosti} onClick={SuccesKrosti} alt="" />
            </div>
            
            <div className='text-center mt-7'>
            <button className='m-auto mt-4 bg-green-400 text-white rounded-full p-3 hover:px-6' onClick={Siguiente}>{language == true? "Next": "Siguiente"}</button>
            </div>
</>}
{validadorGame == 3 && 
            <>
            <div className='flex justify-around'>   
            <Badge badgeContent={badgeCounter} className='max-[450px]:absolute max-[450px]:top-[337px] max-[450px]:left-[280px] ml-10' color="primary">
            <img src={palanca} className='h-[50px] w-[50px] ' alt=""  />
            </Badge>
            <h2 className='max-[450px]:h-[38%] max-[450px]:mr-[33%] max-[450px]:ml-[9%] max-[450px]:rounded-lg max-[450px]:pb-[45px] m-auto text-center  text-white ClipPathAzul1 rounded-lg p-3 pb-10' data-aos="zoom-in">{language == true? "Which one is Bart's original skate??": "Cual es la Patineta original de Bart??"}</h2>
            </div>

            {
             iconValidator == "A" &&   <h1 className='max-[450px]:top-[825px] max-[450px]:left-[3rem] ClipPathRombo p-[17px] text-white absolute top-[447px] left-40'>{nombrePlayer}</h1>
            }
        {
             iconValidator == "B" &&   <h1 className='max-[450px]:top-[825px] max-[450px]:left-[3rem] ClipPathRomboGradiente p-[17px] text-white absolute top-[447px] left-40 '>{nombrePlayer}</h1>
        }

        {
            iconValidator == "C" &&     <h1 className='max-[450px]:top-[825px] max-[450px]:left-[3rem] ClipPathRombo p-[17px]  text-yellow-300 absolute top-[447px] left-40'>{nombrePlayer}</h1>
        }

            <div className='flex justify-around mt-8'>
                <img className='max-[450px]:h-[140px] hover:cursor-pointer' src={patineta1} onClick={Fail} alt="" />
                <img className='max-[450px]:h-[140px] max-[450px]:mr-[4%] hover:cursor-pointer' src={bart} onClick={SuccesBart} alt="" />
                <img className='max-[450px]:h-[140px] max-[450px]:mr-[4%] hover:cursor-pointer' src={patineta2} onClick={Fail} alt="" />
            </div>
            
            <div className='text-center mt-3'>
            <button className='max-[450px]:mt-8 m-auto mt-4  bg-red-600 text-white rounded-full p-3 hover:px-6' onClick={Finalizar}>{language == true? "Finish": "Finalizar"}</button>
            </div>
</>}
            </article>

            

         
            
            
            <h1 className='text-center mt-14 p-6'>{language == true? "Meanwhile you play, here below you can see some Bart's funny moments": "Mientras juegas, aquí debajo puedes ver un resumen de algunos momentos divertidos de Bart..."}</h1>
             <img src={gradiente} className='m-auto tituloVideo mt-10 mb-4' alt=""  />
            <iframe className='mt-14 mb-8 m-auto max-[450px]:w-[80vw]' width="560" height="315" src="https://www.youtube.com/embed/TfoCHgYZ9Vk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            
            <Footer/>

             


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="max-[450px]:w-[86%] modal">
            <div className=" modal-box">
                <h3 className="font-bold text-lg">{language == true? "Welcome, enter your Name and choose your Icon!!!": "Bienvenido, introduce tu Nombre y elige tu ícono!!!"}</h3>
            { language == false ?
                <input  type="text" placeholder="Nombre"  required onChange={e=>{setNombrePlayer(e.target.value)}} className="bg-white text-center input input-bordered input-sm w-full max-w-xs mt-10" />
              : <input  type="text" placeholder="Name"  required onChange={e=>{setNombrePlayer(e.target.value)}} className="bg-white text-center input input-bordered input-sm w-full max-w-xs mt-10" />
            } 
                <div className='mt-3 flex justify-around w-[90%]'>
                <h1 className='ClipPathRombo p-[17px] text-white hover:cursor-pointer' onClick={()=>{setIconValidator("A")}}>{nombrePlayer}</h1>
                <h1 htmlFor="my-modal" className='ClipPathRomboGradiente p-[17px] text-white hover:cursor-pointer' onClick={()=>{setIconValidator("B")}}>{nombrePlayer}</h1>
                <h1 className='ClipPathRombo p-[17px]  text-yellow-300 hover:cursor-pointer' onClick={()=>{setIconValidator("C")}}>{nombrePlayer}</h1>
                </div>
                {
                (iconValidator == "A" || iconValidator == "B" || iconValidator == "C") &&
                  <>
                    <div className="modal-action">
                <label id='jugar' htmlFor="my-modal" className="btn">{language == true? "Play": "A jugar"}</label>
                </div>
                </>
                
              }
            </div>
            </div>
        </>

    );
};

export default Bart;