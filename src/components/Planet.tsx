import { useParams } from "react-router-dom";
import data from "../data.json";

export default function Planet() {
   const { planetName } = useParams();
   const planetToShow = data.find((planet) => planet.name === planetName) || data[2];
   return (
      <div>
         <h1>{planetToShow?.name}</h1>
         <h2>{planetToShow?.overview.content}</h2>
      </div>
   );
}
