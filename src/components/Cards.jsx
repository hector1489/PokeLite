import Card from 'react-bootstrap/Card'

const Cards = ({ info }) => {
  if (!info) return <div>Cargando...</div>

  return (
    <div className="galeria grid-columns-5 p-3">
      <Card style={{ width: '18rem' }} className="text-center card-pokemon">
        <Card.Img variant="top" src={info?.sprites?.front_default} />
        <Card.Body>
          <Card.Title style={{ textTransform: 'capitalize' }}>{info?.name?.replaceAll('-', ' ')}</Card.Title>
            <ul>
              {info?.stats?.map((stat) => (
                <li key={stat?.stat?.name} style={{ textTransform: 'capitalize' }}>
                  {stat?.stat?.name?.replaceAll('-', ' ')}: {stat?.base_stat}
                </li>
              ))}
            </ul>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
