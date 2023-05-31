import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, []);

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <section key={index} className={styles['pokemon-card']}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={pokemon.name}
            className={styles['pokemon-image']}
          />
          <p className={styles['pokemon-name']}>{pokemon.name}</p>
        </section>
      ))}
    </>
  );
}
