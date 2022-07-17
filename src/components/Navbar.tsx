import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Navbar.css";
function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/">Home</Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Pesquise por um filme"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlass size={22} />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
