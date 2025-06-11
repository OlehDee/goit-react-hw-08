import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; // або твій шлях до селектора

import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.container}>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? css.activeLink : css.link}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink 
          to="/contacts" 
          className={({ isActive }) => isActive ? css.activeLink : css.link}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
