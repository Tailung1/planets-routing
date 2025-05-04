import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

export default function Layout() {
  const navigateLinks = [
    "/Mercury",
    "/Venus",
    "/Earth",
    "/Mars",
    "/Jupiter",
    "/Saturn",
    "/Uranus",
    "/Neptune",
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    if (navigateLinks.includes(pathName)) {
      navigate(pathName);
    } else {
      navigate("/Earth");
    }
  }, []);
  // Programetically

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
