import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content flex justify-between">
      <Link to="/">
        <a className="btn btn-ghost normal-case text-3xl">RannaGhor</a>
      </Link>
      <div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/blog" className="btn btn-ghost normal-case text-xl">
          Blog
        </Link>
        <button className="btn btn-outline btn-secondary">
          <Link to="/login" className="normal-case text-xl">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
