import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
    return (
        <div className={css.container}>
            <NavLink
                to="/login"
                className={({ isActive }) => isActive ? css.activeLink : css.link}>
                Log In
            </NavLink>
            <NavLink
                to="/register"
                className={({ isActive }) => isActive ? css.activeLink : css.link}>
                Register
            </NavLink>
        </div>
    );
}
