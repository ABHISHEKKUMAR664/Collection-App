import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonList from './PokemonList';

const Pokemon = () => {

    const[pokemon,setPokemon]=useState([]);
    useEffect(()=>{
        axios.get(" https://pokeapi.co/api/v2/pokemon")
       .then(res=>setPokemon(res.data.results.map((ele,index)=>{
           return ele.name
       })
        
        ))
    },[])
    return (
        <div>
            <h1 className="App ">POKEMON</h1>
            {pokemon.map((ele,index)=>{
                return <PokemonList
                key={index}
                id={index}
                list={ele}
                />
            })}
            
        </div>
    )
}

export default Pokemon;
