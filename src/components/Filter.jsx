import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import PokemonContext from "../context/PokemonContext"

const Filter = () => {
  const { data } = useContext(PokemonContext)
  const [idPokemon, setIdPokemon] = useState(null)
  const navigate = useNavigate()

  const handlePokemon = (e) => {
    const nomPokemon = e.target.value
    setIdPokemon(nomPokemon)
  }

  return (
    <div className="form-box">
      <Form.Select aria-label="Default select example" size="sm" onChange={handlePokemon}>
        <option>Elige a tu compañero</option>
        {data && data.map((item) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Button variant="dark" onClick={() => navigate(`/pokemon/${idPokemon}`)}>Buscar</Button>
    </div>
  )
}

export default Filter
