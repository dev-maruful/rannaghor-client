import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { logout, user, photoURL } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
    navigate("/");
  };

  return (
    <div className="navbar max-w-7xl md:mx-auto rounded-b-lg py-5 bg-[#DAF7A6] text-primary-content flex flex-col md:flex-row justify-between">
      <div className="flex flex-col md:flex-row">
        <img className="w-16" src="/public/logo.png" alt="" />
        <Link to="/">
          <button className="btn btn-ghost normal-case text-3xl font-extrabold">
            RannaGhor
          </button>
        </Link>
      </div>
      <div>
        <NavLink
          to="/"
          className={`btn btn-ghost normal-case text-xl font-medium ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={`btn btn-ghost normal-case text-xl font-medium ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Blog
        </NavLink>
        {!user && (
          <NavLink
            to="/login"
            className={`btn btn-ghost normal-case text-xl font-medium ${({
              isActive,
            }) => (isActive ? "active" : "")}`}
          >
            Login
          </NavLink>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="btn btn-ghost normal-case text-xl font-medium"
          >
            Logout
          </button>
        )}
        {photoURL && (
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={photoURL} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
