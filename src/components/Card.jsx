import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({pokemon}) {
    const navigate=useNavigate()
  return (
        <div  className=' w-full bg-gray-100 rounded-xl p-4'>
            <div className=' w-full flex justify-center mb-4 items-center mt-4'>
                <img src={pokemon?.sprites?.other?.home?.front_default} className=' rounded-xl content-center'/>
            </div>
            <div className='flex items-center justify-center'>
                <h2 className=' text-xl font-bold'>{pokemon.name}</h2>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <audio controls>
                    <source src={pokemon.cries.latest} type="audio/ogg  "/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <button onClick={()=>{navigate(`/pokemon/${pokemon.name}`)}} className='rounded-lg bg-blue-500 w-full  p-3'>View Details</button>
        </div>
  )
}

export default Card