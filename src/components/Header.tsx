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
    <header className="flex flex-col  items-center  pt-[22px] pr-[32px] pl-[41px] ">
      <div className="flex gap-[200px] justify-between w-full ">
        <h1 className="text-3xl text-[#fff]">The Planets</h1>
        <nav>
          <ul className="flex gap-8">
            {navigations.map((planet) => (
              <li className="liStyle" key={planet}>
                <Link to={planet}>{planet}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="w-full mt-[27px] h-[1px] flex-shrink-0 opacity-20 bg-white" />
    </header>
  );
}
