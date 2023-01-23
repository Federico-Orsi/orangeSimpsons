import portadaOrange from "../img/Portada-Orange.jpeg"
import { Link } from 'react-router-dom';
import orangeLogo from "../img/ORANGE_logo.jpg"
import Footer from '../components/Footer';
import simpsonsHouse from "../img/simpsonsHouse.jpg"
import introGif from "../img/gifSimponsIntro.gif"
import homerImg from "../img/homer-img.png"


const Contacto = () => {
    
 const goToTop = () => {
    window.scrollTo({top:0 , behavior: "smooth"});
 }  
    

 
    
    return (
        <>
        
        <article>
  <img className="max-[450px]:h-[400px]" src={simpsonsHouse} style={{width: "100%"}} alt="" />
</article>



<div className="text-center mt-5 mb-5">
<Link to="/"><img style={{height: "78px"}} className="inline" src={homerImg} onClick={goToTop} /></Link>
<p>Click me...</p>
</div>


{
 (portadaOrange && orangeLogo)  && 
<Footer/>

}



</>
    );
};

export default Contacto;






