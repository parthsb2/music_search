import { NavLink } from "react-router-dom"

function Home() {
  if (window.location.pathname === "/") {
    window.location.reload()
  }
}

export function Navbar() {
  return (
    <header className="navbar-section">
      <nav className="navbar">
        <NavLink exact to="/" className="navbar-item" activeClassName="is-active" onClick={Home}>
          Home
        </NavLink>
        <NavLink exact to="/favourites" className="navbar-item" activeClassName="is-active">
          Favourites
        </NavLink>
      </nav>
    </header>
  )
}
