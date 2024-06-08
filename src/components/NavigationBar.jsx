import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = ({ items }) => {
  return (
    <div className="navbar">
      {items.map((item, index) => (
        // console.log({item}),
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <div className='flex flex-col items-center justify-center'>
            <img src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationBar;
