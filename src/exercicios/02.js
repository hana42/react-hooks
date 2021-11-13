import * as React from 'react'

export default function Exercicio02({ initialName = '' }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [count, setCount] = React.useState(() => 0)

  const [name, setName] = React.useState(
    /* Recuperação de um valor previamente salvo no localStorage
    Caso não exista, usa o valor de initialName.
    window.localStorage.getItem('name') || initialName */

    // Retornando uma função para criar um lazy initializer, que
    // é executado apenas uma vez, no carregamento inicial da página
    /* eslint-disable no-undef */
    () => readStorage() || initialName
  )

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  /* 
  useEffect() tem dois parâmetros:
  1) É uma função que será atualizada depois de uma atualização do componente.
  2) Vetor de dependências: quais variáveis de estado serão monitoradas para a execução do useEffect(). */

  React.useEffect(() => {
    // Armazena em um item do localStorage chamado "name" o valor da variável de estado.
    window.localStorage.setItem('name', name)
    setCount(count + 1)
  }, [count, name])

  function handleChange(event) {
    /* A atualização da variável de estado "name" irá desencadear
    uma atualização do componente. Após a atualização ter sido
    processada, será executado o useEffect. */
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor='name'>Name: </label>
        <input value={name} onChange={handleChange} id='name' />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <div>Quantidade de atualizações: {count}</div>
    </div>
  )
}
