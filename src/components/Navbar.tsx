import { MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
function Navbar() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/">Home</Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Pesquise por um filme" />
        <button type="submit">
          <MagnifyingGlass size={22} />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
