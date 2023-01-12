import portadaOrange from "../img/Portada-Orange.jpeg"
import { Link } from 'react-router-dom';
import orangeLogo from "../img/ORANGE_logo.jpg"
import Footer from '../components/Footer';


const Contacto = () => {
    
 const goToTop = () => {
    window.scrollTo({top:0 , behavior: "smooth"});
 }  
    

 
    
    return (
        <>
        
        <article>
  <img className="max-[450px]:h-[400px]" src={portadaOrange} style={{width: "100%"}} alt="" />
</article>



<div className="text-center">
<Link to="/"><img style={{height: "78px"}} className="inline" src={orangeLogo} onClick={goToTop} /></Link>
</div>


{
 (portadaOrange && orangeLogo)  && 
<Footer/>

}



</>
    );
};

export default Contacto;






