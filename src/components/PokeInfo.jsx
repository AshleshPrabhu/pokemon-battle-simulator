import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
function PokeInfo() {
    const {name}=useParams()
    const [pokeData, setPokeData] = useState()
    useEffect(()=>{
        const fetchData =async()=>{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokeData(data);
        }
        fetchData()
    },[])
  return (
    <div className="bg-black h-full text-white">
        <Navbar/>
        <div className="w-full mb-6 flex items-center justify-center ">
            <h1 className="text-5xl font-bold text-white">{name}:</h1>
        </div>
        <div className='w-full flex items-center justify-center mt-4'>
            <div className="w-[80%] flex justify-center mb-4 relative border rounded-xl p-2 shadow-md shadow-white">
                <img
                    src={pokeData?.sprites?.other?.home?.front_default}
                    className="rounded-xl"
                />
            </div>
        </div>
        
        <div className="text-white flex items-center justify-center">
            <p className='text-xl'>Pokemon Data:</p>
        </div>
        <div className='w-full flex items-end justify-center'>
            <div className='flex flex-col w-[80%]'>
                <p className='text-lg '>Name:  {name}</p>
                <p className='text-lg '>Height:  {pokeData?.height}</p>
                <p className='text-lg '>Weight:  {pokeData?.weight}</p>
                <p className='text-lg '>Types:  {pokeData?.types?.map((type)=>(<span key
                ={type.slot}>{type.type.name}</span>))}</p>
                <p className='text-lg '>Base Stats:  {pokeData?.stats?.map((stat)=>(
                    <div className='text-lg ml-5 ' key={stat.stat.name}>
                        {stat?.stat?.name}:{stat?.base_stat}
                    </div>
                ))}</p>
                <p className='text-lg '>Moves : </p>
                <p className='text-lg grid grid-cols-7 gap-2  '>
                    {pokeData?.moves?.map((item)=>(
                    <div className='text-lg border flex items-center justify-center rounded-lg shadow-md shadow-white ' key={item?.move?.name}>
                        <p>{item?.move?.name}</p>
                    </div>
                ))}</p>
                
            </div>
        </div>
    </div>
  )
}

export default PokeInfo