import { useParams } from "react-router-dom";
import data from "../data.json";
import "./Planet.css";

export default function Planet() {
  const { planetName } = useParams();
  const planetToShow =
    data.find((planet) => planet.name === planetName) || data[2];
  return (
    <div className="flex flex-col  items-center mt-[127px]">
      <div className="flex items-center justify-center   mb-[87px] gap-[220px]">
        <div className="w-[400px] h-[400px] max-w-full max-h-full overflow-hidden flex justify-center items-center">
          <img
            src={planetToShow?.image}
            alt={planetToShow?.name}
            width={planetToShow?.width}
            height={planetToShow?.height}
            className="object-contain object-center max-w-full max-h-full"
          />
        </div>

        <div className="flex flex-col items-start w-[350px]">
          <h1 className="text-[#fff] text-[80px] font-bold">
            {planetToShow?.name}
          </h1>

          <div className="h-[75px] flex items-center">
            <p className="text-[#fff] text-[14px] font-normal leading-[25px]">
              {planetToShow?.overview.content}
            </p>
          </div>

          <div className="Src">
            <p>
              Source : <span className="underline">Wikipedia</span>{" "}
            </p>
          </div>

          <div className="flex flex-col gap-[16px] mb-[56px]">
            <button className="Btn">
              {" "}
              <span className="BtnSpan">01</span>Overview
            </button>
            <button className="Btn">
              {" "}
              <span className="BtnSpan">02</span>INTERNAL STRUCTURE
            </button>
            <button className="Btn">
              {" "}
              <span className="BtnSpan">03</span>
              SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] mb-[56px]">
        <div className="Details">
          <span className="DetailsSpan">ROTATION TIME</span>{" "}
          <p className="DetailsP">{planetToShow?.rotation}</p>
        </div>
        <div className="Details">
          <span className="DetailsSpan">REVOLUTION TIME</span>{" "}
          <p className="DetailsP">{planetToShow?.revolution}</p>
        </div>
        <div className="Details">
          <span className="DetailsSpan">radius</span>{" "}
          <p className="DetailsP">{planetToShow?.radius_km} KM</p>
        </div>
        <div className="Details">
          <span className="DetailsSpan">AVERAGE TEMP.</span>{" "}
          <p className="DetailsP">
            {planetToShow?.temperature_c.average}°c{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
