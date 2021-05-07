/* eslint-disable space-before-function-paren */
import { useEffect, useState, useRef } from 'react'

export function useNearScreen() {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(
    function () {
      Promise.resolve(
        // si lo que esperamos es una promesa entonces usamos este metodo.
        typeof window.IntersectionObserver !== 'undefined' // pregunta si el navegador lo tiene disponible.
          ? window.IntersectionObserver // si disponible, lo usamos
          : import('intersection-observer') // no disponible,  realizamos un import dinamico, es un metodo y como parametro se envia la dependencia que quieres
      ).then(() => {
        // console.log(ref.current);
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          //  console.log({isIntersecting})
          if (isIntersecting) {
            // console.log('si');
            setShow(true)
            observer.disconnect() // para que solo actualice una vez.
          }
        })

        observer.observe(element.current)
      })
    },
    [element]
  )

  return [show, element]
}
