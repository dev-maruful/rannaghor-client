import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar max-w-7xl md:mx-auto rounded-b-lg py-5 bg-[#DAF7A6] text-primary-content flex flex-col md:flex-row justify-between">
      <Link to="/">
        <button className="btn btn-ghost normal-case text-3xl">
          RannaGhor
        </button>
      </Link>
      <div>
        <NavLink
          to="/"
          className={`btn btn-ghost normal-case text-xl ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={`btn btn-ghost normal-case text-xl ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Blog
        </NavLink>
        <NavLink
          to="/login"
          className={`btn btn-ghost normal-case text-xl ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
