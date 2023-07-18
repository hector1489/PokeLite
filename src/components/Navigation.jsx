import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const setActiveClass = ({ isActive }) =>
   (isActive ? "text-white text-decoration-none me-3" : "text-secondary text-decoration-none me-3")

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <img className="img-navbar" src="img/Logo_Team_GO_Rocket.png" alt="Logo_Team_GO_Rocket" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={setActiveClass} to="/">Home</NavLink>
            <NavLink className={setActiveClass} to="/search">Search</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
