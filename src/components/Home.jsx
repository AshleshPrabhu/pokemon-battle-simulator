import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Card from './Card';

function Home() {
    const pokemonNames = [
        "pikachu",
        "charizard",
        "bulbasaur",
        "squirtle",
        "jigglypuff",
        "gengar",
        "eevee",
        "snorlax",
        "lucario",
        "greninja",
        "mewtwo",
        "machamp",
        "lapras",
        "dragonite",
        "alakazam"
    ];
    const [detailsArray, setDetailsArray] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const tempArray = []; // Temporary array to collect data
            for (let i = 0; i < pokemonNames.length; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNames[i]}`);
                const data = await response.json();
                tempArray.push(data);
            }
            setDetailsArray(tempArray); // Update state with fetched data
        };
        fetchPokemon();
    }, []);

  return (
    <div className="w-full py-8 bg-black">
        <div className='flex items-center justify-center mb-5'>
            <p className='text-white text-xl'>POKEMONS:</p>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className="grid grid-cols-3 gap-3 w-[80%]">
                {detailsArray?.map((pokemon)=>(
                    <div key={pokemon.id}>
                        <Card pokemon={pokemon}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home