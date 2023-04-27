import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/product">Product</Link> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}
