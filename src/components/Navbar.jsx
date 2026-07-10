import { Link, NavLink } from "react-router-dom";

// NOTE: This is a lightweight placeholder so Part B pages can be previewed
// standalone. Swap this out for whatever Part A ships.
export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-gold" : "text-white/75 hover:text-gold"}`;

  return (
    <header className="bg-bg text-white">
      <div className="container max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-xl text-gold">
          Habitect
        </Link>
        <nav className="flex gap-6 text-sm">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/properties" className={linkClass}>Properties</NavLink>
          <NavLink to="/saved-properties" className={linkClass}>Saved</NavLink>
        </nav>
      </div>
    </header>
  );
}