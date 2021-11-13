import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor='name'>Name: </label>
      <input id='name' value={name} onChange={(event) => setName(event.target.value)}
      />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({ animal, onAnimalChange }) {
  // 💣 delete this, it's now managed by the Exercicio03
  // const [animal, setAnimal] = React.useState('')

  return (
    <div>
      <label htmlFor='animal'>Favorite Animal: </label>
      <input id='animal' value={animal} onChange={onAnimalChange} />
    </div>
  )
}

// 🐨 uncomment this
function Display({ name, animal }) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

// 💣 remove this component in favor of the new one
// function Display({ name }) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

export default function Exercicio03() {
  // 🐨 add a useState for the animal
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleAnimalChange(event) {
    setAnimal(event.target.value)
  }

  return (
    <form>
      <Name name={name} onNameChange={handleNameChange} />

      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal animal={animal} onAnimalChange={handleAnimalChange} />

      {/* 🐨 pass the animal prop here */}
      <Display name={name} animal={animal} />
    </form>
  )
}
