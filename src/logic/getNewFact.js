import { CAT_FACT_ENDPOINT } from '../constants'

export const getNewFact = () => {
  return fetch(CAT_FACT_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      const factWords = fact.split(' ', 3).join(' ')
      return factWords
    })
}
