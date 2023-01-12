import React from 'react';
import orangeLogo from "../img/ORANGE_logo.jpg"
import { Link } from 'react-router-dom';
import { ContextApp } from './Context';
import Badge from '@mui/material/Badge';
import { useContext } from "react";







const NavBar = () => {
    
  const {badgeCounter} = useContext(ContextApp); 
  
  
  return (
        <>
      

<div className="navbar bg-base-100 border-solid border-b border-b-orange-300">
  <div className="navbar-start">
    {/* Secciones desde Mobile View */}
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Identidad Visual</a></li>
        <li><a>Marketing</a></li>
        <li><a>Empresarial</a></li>
        <li tabIndex={0}>
        <a className=''>
          Editorial
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a className='ml-2 mb-1 text-white bg-orange-800 hover:text-orange-400'>Libros</a></li>
          <li><a className='text-white mb-1 ml-2 bg-orange-800 hover:bg-gray-700 hover:text-orange-500'>Folleteria</a></li>
          <li><a className='ml-2 text-white bg-orange-800  hover:bg-slate-500 hover:text-orange-500'>Papelería</a></li>
          
        </ul>
      </li>
        
        
        <li><a>Deco</a></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>
    </div>
    {/* Secciones desde Tablet View */}
  <div className="hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='hover:text-amber-300 hover:bg-slate-600'>Identidad Visual</a></li>
      <li tabIndex={0}>
        <a className='hover:text-amber-200 hover:bg-slate-400'>
          Editorial
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Libros</a></li>
          <li><a className='text-orange-600'>Folleteria</a></li>
          <li><a>Papelería</a></li>
        </ul>
      </li>
      
      <li><Link className='hover:text-amber-400'>Marketing</Link></li>
      
    </ul>
  </div>
    
  </div>
  

  <Link to="/" className="normal-case text-xl text-center hover:bg-white hover:cursor-pointer"><img className=' hover:bg-white w-80' src={orangeLogo} alt="" /></Link>
  {/* navbar End */}

  
  
  <div className="navbar-end">
  
  <div className="hidden md:flex mr-20">
    <ul className="menu menu-horizontal px-1">
    <li><a className=''>Empresarial</a></li>
      <li><a className=''>Deco</a></li>
      <li><Link to="/Contacto">Contacto</Link></li>
    </ul>
  </div>

  <Link to="/Cart"><button className="btn btn-ghost btn-circle">
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
            



    
  



        </>
    ); 
};

export default NavBar;