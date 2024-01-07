// import { useState, useEffect } from 'react'
import { useCatFact } from './hooks/useCatFact'
import { CAT_IMAGE_URL_PREFIX, CAT_IMAGE_URL_SUFIX } from './constants'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const CAT_IMAGE_ENDPOINT = `${CAT_IMAGE_URL_PREFIX}${fact}${CAT_IMAGE_URL_SUFIX}`

  const handleClick = async () => {
    refreshFact()
    // const newFact = await getNewFact()
    // setFact(newFact)
  }

  return (
    <main>
      <h1>Gatitos Facts</h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact &&
        <>
        <p>{fact}</p>
        <img src={CAT_IMAGE_ENDPOINT} alt={`Imagen de gatito extraida de API, con la palabra ${fact} en ella`} />
        </>}
    </main>
  )
}
