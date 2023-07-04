import { useState } from 'react';
import style from './App.module.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Detail from "./components/Details/Detail";
import Error404 from "./components/PageError/Error404"
import axios from "axios";
import { Routes, Route } from "react-router-dom";


function App() { 
   const [characters, setCharacters] = useState([]);

   function onSearch (id) {
      const character = characters.find((item) => item.id === Number(id))
      if (character) return alert('¡Este personaje ya fue agregado!')

      try {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
             if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
             } else {
               window.alert("¡el ID no existe!");
             }
           }
         );
       } catch (error) {
         console.log({error});
       }
     }
   
   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
    };

   return (
    
      <div className={style.App}>
      
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error404/>} />
        
      
      </Routes>
  
    </div>
  );
}

export default App;