import { useState, useEffect } from 'react'
import { getNewFact } from '../logic/getNewFact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getNewFact().then(newFact => setFact(newFact))
  }

  // * Intento de utilizar async/await, pero no funciona porque devuelve una promesa.
  // * Tampoco se le puede pasar una async function al useEffect.
  // const fetchData = async () => {
  //   return await getNewFact()
  // }
  // const newFact = fetchData()
  // setFact(newFact)
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
