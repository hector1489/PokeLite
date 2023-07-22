import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Cards from "../components/Cards"

const Pokemon = () => {
  const [info, setInfo] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getPokemon(id)
  }, [id])

  const getPokemon = async (pokemonId) => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      const users = await data.json()
      setInfo(users)
    } catch (error) {
      console.error('Ha ocurrido un error', error)
    }
  }

  return (
    <div className="box2">
      <h3>Tu proximo compañero es:</h3>
      <Cards info={info} />
    </div>
  )
}

export default Pokemon
