import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import PokemonContext from "../context/PokemonContext"

const Filter = () => {
  const { data } = useContext(PokemonContext)
  const [idPokemon, setIdPokemon] = useState("Elige a tu compañero")
  const navigate = useNavigate()

  const handlePokemon = (e) => {
    const nomPokemon = e.target.value
    setIdPokemon(nomPokemon)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(idPokemon === "Elige a tu compañero") {
      return alert("Debes seleccionar un pokemon valido...")
    }
    navigate(`/search/${idPokemon}`)
  }

  return (
    <Form onSubmit={handleSubmit} className="form-box">
      <Form.Select aria-label="Default select example" size="sm" onChange={handlePokemon} defaultValue={idPokemon}>
        <option disabled>Elige a tu compañero</option>
        {data?.map((item) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Button variant="dark" type="submit">Buscar</Button>
    </Form>
  )
}

export default Filter
