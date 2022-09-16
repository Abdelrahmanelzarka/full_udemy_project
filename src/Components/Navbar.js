import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
    <NavLink to='/'>Python</NavLink>
    <NavLink to='Excel'>Excel</NavLink>
    <NavLink to='Web'>Web Development</NavLink>
    <NavLink to='Java'>JavaScript</NavLink>
    <NavLink to='Data'>Data Science</NavLink>
    <NavLink to='AWS'>AWS Certification</NavLink>
    <NavLink to='Drawing'>Drawing</NavLink>

    </nav>
  )
}
