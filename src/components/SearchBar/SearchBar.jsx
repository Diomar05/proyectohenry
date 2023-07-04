import React, { useState } from 'react';
import searchBar from "./SearchBar.module.css"


export default function SearchBar({ onSearch }) {

const [id, setId] = useState([]);

const handleChange = (event) =>{
  setId(event.target.value)
}

    return (
      
            <div className={searchBar.searchContainer}>

               <input 
                  className={searchBar.Input}  
                  onChange={handleChange}
                  value={id} 
                  type='search' 
                  placeholder="Buscar..."/>

                  <button className={searchBar.Button} 
                  onClick={()=> onSearch(id)}>Agregar</button> 
   
   </div>

    );
 }
 