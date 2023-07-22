import teamRocket from "../assets/team-rocket-preview.jpg"

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="my-4">Pag. no encontrada</h1>
      <img src={teamRocket} alt="team-rocket" className="my-4" />
    </div>
  )
}

export default NotFound
