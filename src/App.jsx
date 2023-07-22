import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Search from './views/Search'
import Pokemon from './views/Pokemon'
import NotFound from './views/NotFound'
import './App.css'
import PokemonContext from "./context/PokemonContext"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    getAllPokemons()
  }, [])

  const getAllPokemons = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
      const data = await res.json()
      setData(data.results)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const globalState = {
    data,
    setData
  }

  return (
    <PokemonContext.Provider value={globalState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  )
}

export default App
