import * as React from 'react'

import { PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'

function PokemonInfo({ pokemonName }) {
  // 🐨 Have state for the pokemon (null)

  /* const [pokemon, setPokemon] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState("idle"); */

  const [state, setState] = React.useState({
    pokemon: null,
    error: null,
    status: 'idle',
  })

  /* Constantes avulsas somente-leitura para facilitar o 
  trabalho com variável de estado objeto (usando desestruturação) */
  const { pokemon, error, status } = state

  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  React.useEffect(() => {

    // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
    if (!pokemonName) return

    // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
    setState({ pokemon: null, error: null, status: 'pending' })

    // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
    //   fetchPokemon('Pikachu').then(pokemonData => { /* update all the state here */ }
    fetchPokemon(pokemonName)
      .then((pokemonData) => { 
        // Deu certo
        setState({ ...state, pokemon: pokemonData, status: 'resolved' })
      })
      .catch((error) => {
        // Deu errado
        setState({ ...state, error: error, status: 'rejected' })
      })

    // fetchPokemon(pokemonName).then(f1).catch(f2)
  }, [pokemonName, state])

  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />
  switch (status) {
    case 'idle':
      return 'Submit a pokemon'

    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />

    case 'resolved':
      return <PokemonDataView pokemon={pokemon} />

    case 'rejected':
      return (
        <div role='alert'>
          There was an error:{' '}
          <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
        </div>
      )
    // no default
  }
}

export default function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className='pokemon-info-app'>
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className='pokemon-info'>
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}
