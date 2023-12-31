import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Detail () {
    const {id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
         {character.name && (
            <div>
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h2>{character.spcies}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src="{character.image}" alt="image" />
            
           </div>
         )}
        </div>
    )
}