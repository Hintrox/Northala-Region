'use client';

import React, { useState } from 'react';

const northalaPokemon = [
  {
    id: 1,
    name: "Flarin",
    types: ["Fire", "Fairy"],
    category: "Ember Sprite Pokémon",
    description: "Flarin can be found dancing among wildflowers in Northala's secret groves.",
    stats: { hp: 45, attack: 50, defense: 40 }
  },
  {
    id: 2,
    name: "Pyrilis", 
    types: ["Fire", "Fairy"],
    category: "Flamewisp Pokémon",
    description: "Pyrilis inhabits Northala's flowering valleys, cultivating magical gardens.",
    stats: { hp: 60, attack: 65, defense: 60 }
  },
  {
    id: 3,
    name: "Solafae",
    types: ["Fire", "Fairy"], 
    category: "Enchantress Pokémon",
    description: "Solafae guards Northala's ancient flower sanctuaries.",
    stats: { hp: 75, attack: 75, defense: 70 }
  }
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
        <div className="container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-8">Northala Region</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the harmonious fusion of Nordic and Thai cultures in Northala, 
            where Fire/Fairy Pokémon dance among eternal blossoms.
          </p>
          <button 
            onClick={() => setCurrentPage('pokedex')}
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100"
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
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold text-pink-600"
          >
            Northala Region
          </button>
          <div className="space-x-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-gray-600 hover:text-pink-600"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('pokedex')}
              className="text-gray-600 hover:text-pink-600"
            >
              Pokédex
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Northala Pokédex</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {northalaPokemon.map((pokemon) => (
            <div key={pokemon.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-pink-600 text-3xl font-bold">
                  {pokemon.name.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pokemon.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{pokemon.category}</p>
                <div className="flex gap-2 mb-4">
                  {pokemon.types.map((type) => (
                    <span key={type} className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{pokemon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}