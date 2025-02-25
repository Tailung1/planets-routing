import { Link } from "react-router-dom";

const navigations: string[] = [
   "Mercury",
   "Venus",
   "Earth",
   "Mars",
   "Jupiter",
   "Saturn",
   "Uranus",
   "Neptune",
];

export default function Header() {
   return (
      <header>
         <h1>The Planets</h1>
         <nav>
            <ul>
               {navigations.map((planet) => (
                  <li key={planet}>
                     <Link to={planet}>{planet}</Link>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}
