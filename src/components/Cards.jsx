import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  const { info } = props;

  // El if para verificar
  if (!info) {
    return <div>Esta cosa no carga ...</div>;
  }

  // array con los nombres de los stats en pokeApi y  ocupar el confiable map
  const statNames = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];

  return (
    <div className="galeria grid-columns-5 p-3">
      <Card style={{ width: '18rem' }} className="text-center card-pokemon">
        <Card.Img variant="top" src={info.sprites.other['official-artwork'].front_default} />
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>
          <Card.Text>
            <ul>
              {info.stats.map((stat, index) => (
                <li key={statNames[index]}>
                  {statNames[index]}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
