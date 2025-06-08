'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const northalaPokemon = [
  {
    id: 1,
    name: "Flarin",
    types: ["Fire", "Fairy"],
    category: "Ember Sprite Pokémon",
    description: "Flarin can be found dancing among wildflowers.",
    stats: { hp: 45, attack: 50, defense: 40 },
    normalImage: "/pokemon/flarin.png",
    shinyImage: "/pokemon/flarin_shiny.png"
  },
  {
    id: 2,
    name: "Pyrilis",
    types: ["Fire", "Fairy"],
    category: "Flamewisp Pokémon", 
    description: "Pyrilis inhabits flowering valleys.",
    stats: { hp: 60, attack: 65, defense: 60 },
    normalImage: "/pokemon/pyrilis.png",
    shinyImage: "/pokemon/pyrilis_shiny.png"
  },
  {
    id: 3,
    name: "Solafae",
    types: ["Fire", "Fairy"],
    category: "Enchantress Pokémon",
    description: "Solafae guards ancient sanctuaries.",
    stats: { hp: 75, attack: 75, defense: 70 },
    normalImage: "/pokemon/solafae.png",
    shinyImage: "/pokemon/solafae_shiny.png"
  }
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isShiny, setIsShiny] = useState(false);

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-6xl font-bold mb-8">Northala Region</h1>
          <p className="text-xl mb-8">Fire/Fairy Pokémon dance among eternal blossoms</p>
          <button 
            onClick={() => setCurrentPage('pokedex')}
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg"
          >
            Explore Pokédex
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-pink-600">
            Northala Region
          </button>
          <button onClick={() => setCurrentPage('home')} className="text-gray-600">
            Home
          </button>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Northala Pokédex</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {northalaPokemon.map((pokemon) => (
            <div key={pokemon.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-pink-100 flex items-center justify-center">
                <button 
                  onClick={() => setIsShiny(!isShiny)}
                  className="absolute top-2 left-2 bg-white p-1 rounded"
                >
                  ✨
                </button>
                <Image
                  src={isShiny ? pokemon.shinyImage : pokemon.normalImage}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{pokemon.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{pokemon.category}</p>
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-1 bg-red-500 text-white rounded text-sm">Fire</span>
                  <span className="px-2 py-1 bg-pink-500 text-white rounded text-sm">Fairy</span>
                </div>
                <p className="text-sm">{pokemon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}