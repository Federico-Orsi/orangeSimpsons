import React from 'react';
import orangeLogo from "../img/ORANGE_logo.jpg"
import { Link } from 'react-router-dom';
import { ContextApp } from './Context';
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import introGif from "../img/gifSimponsIntro.gif";
import spain from "../img/spain2.jpg";
import USA from "../img/usa2.jpg";




const NavBar = () => {
    
  const {cart, badgeCounter, language, setLanguage, setMjeEmptyCart} = useContext(ContextApp); 
  
  

  const changeToSpain = () =>{

    setLanguage(false);

  }

  const changeToUsa = () =>{

    setLanguage(true);

  }
  
  
  return (
        <>
      

<div className="navbar bg-base-100 border-solid border-b border-b-orange-300 relative">
  <div className="navbar-start">
    {/* Secciones desde Mobile View */}
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        
        <li><Link to="/Movie">{language == true? "Movie": "Película"}</Link></li>
        <li tabIndex={0}>
        <a className=''>
        {language == true? "Characters": "Personajes"}
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><Link to="/Bart" className='ml-2 mb-1 text-white bg-orange-800 hover:text-orange-400'>Bart</Link></li>
          <li><a className='text-white mb-1 ml-2 bg-orange-800 hover:bg-gray-700 hover:text-orange-500'>Lisa</a></li>
          <li><a className='ml-2 text-white bg-orange-800  hover:bg-slate-500 hover:text-orange-500'>Moe</a></li>
          
        </ul>
      </li>
        
        <li><Link to="/Contacto">{language == true? "Contact": "Contacto"}</Link></li>
      </ul>
    </div>
    {/* Secciones desde Tablet View ------------------------------------------*/}
  <div className="hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      
      <li className='ml-12'><Link to="/Movie">{language == true? "Movie": "Película"}</Link></li>
     
      <li tabIndex={0} className='ml-10'>
      
        <a className='hover:text-amber-200 hover:bg-slate-400'>
        {language == true? "Game": "Juego"}
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><Link to="/Bart" className='ml-2 mb-1 text-white bg-orange-800 hover:text-orange-400'>Bart</Link></li>
          <li> <a className='text-white mb-1 ml-2 bg-orange-800 hover:bg-gray-700 hover:text-orange-500'>Lisa</a></li>
          <li><a className='ml-2 text-white bg-orange-800  hover:bg-slate-500 hover:text-orange-500'>Moe</a></li>
        </ul>
      </li>
      
      
      
    </ul>
  </div>
    
  </div>
  

  <Link to="/" className="normal-case text-xl text-center hover:bg-white hover:cursor-pointer"><img className=' hover:bg-white w-80' src={introGif} alt="" /></Link>
  {/* navbar End */}

  
  
  <div className="navbar-end">
  
  <div className="max-[450px]:relative hidden md:flex mr-20">
  <img onClick={changeToUsa} className='max-[450px]:absolute hover:cursor-pointer h-[43px] mt-1 mr-8' src={USA} alt="" />
  <img onClick={changeToSpain} className='max-[450px]:absolute hover:cursor-pointer h-[51px] mr-8' src={spain} alt="" />
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/Contacto">{language == true? "Contact": "Contacto"}</Link></li>
    </ul>
  </div>

  <Link to="/Cart"><button className="btn btn-ghost btn-circle max-[450px]:ml-[13%]">
      <div className="indicator">
      <Badge badgeContent={badgeCounter()} color="primary">
       <i style={{fontSize: "large"}} className="bi bi-cart4"></i>
      </Badge>
       
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg> */}
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>
    </Link>
  </div>
</div>


  <img onClick={changeToUsa} className='max-[450px]:absolute max-[450px]:top-[95px] max-[450px]:right-[39px] hover:cursor-pointer h-[38px] min-[450px]:hidden ' src={USA} alt="" />
  <img onClick={changeToSpain} className='max-[450px]:absolute max-[450px]:top-[10px] max-[450px]:right-[35px]   hover:cursor-pointer h-[45px] min-[450px]:hidden  ' src={spain} alt="" />

            



    
  



        </>
    ); 
};

export default NavBar;