import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
// import style from "./Nav.module.css"
import { NavLink } from 'react-router-dom';
import "./Nav.css"

export default function Nav ({ onSearch }) {

   
    return (
    
        <div className="Container">

    
        <div className='containerBoton'> 
        <NavLink to="/home">
        <button className="Boton" >Home</button>
        </NavLink>

        <NavLink to="/about">
        <button className="Boton" >About</button>
        </NavLink>
        </div>
   
            <SearchBar onSearch={onSearch} />
       </div>
    

    )
}