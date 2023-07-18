import Card from 'react-bootstrap/Card'

const Cards = (props) => {
  const { info } = props

  return (
    <div className="galeria grid-columns-5 p-3">
      <Card style={{ width: '18rem' }} className="text-center card-pokemon">
        <Card.Img variant="top" src={info && info.sprites.other['official-artwork'].front_default} />
        <Card.Body>
          <Card.Title>{info && info.name}</Card.Title>
          <Card.Text>
            <ul>
              <li>hp: {info && info.stats[0].base_stat}</li>
              <li>attack: {info && info.stats[1].base_stat}</li>
              <li>defense: {info && info.stats[2].base_stat}</li>
              <li>special-attack: {info && info.stats[3].base_stat}</li>
              <li>special-defense: {info && info.stats[4].base_stat}</li>
              <li>speed: {info && info.stats[5].base_stat}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
