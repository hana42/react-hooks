// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({ children }) {
  // 🐨 create a ref here with React.useRef()
  const tiltRoot = React.useRef()

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your div look fancy.
  React.useEffect(() => {
    const tiltNode = tiltRoot.current
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })

    // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an object to your DOM node to cleanup:

    /* Quando o useEffect() retorna uma função, esta
    será executada uma única vez na fase de finalização(unmount) do componente.
    Este recurso pode ser utilizado para destruir recursos
    que foram criados e não são mais necessários (cleanup). */
    return () => tiltNode.vanillaTilt.destroy()
  }, [])
  /* Quando o vetor de dependências do useEffect() fica vazio, 
  ele é executado apenas uma vez, na primeira atualização do componente,
  durante o carregamento da página. */

  // 🐨 add the `ref` prop to the `tilt - root` div here:
  return (
    <div ref={tiltRoot} className='tilt-root'>
      <div className='tilt-child'>{children}</div>
    </div>
  )
}

export default function Exercicio05() {
  return (
    <>
      <Tilt>
        <div className='totally-centered'>vanilla-tilt.js</div>
      </Tilt>
      <hr />
      <Tilt>
        <div className='totally-centered'>vanilla-tilt.js</div>
      </Tilt>
    </>
  )
}
