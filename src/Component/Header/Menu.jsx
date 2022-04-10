import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
    </nav>
  )
}
