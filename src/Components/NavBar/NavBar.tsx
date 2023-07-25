import { useState } from 'react';
import './../../assets/css/navbar.css'
import { useLocation } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  const { pathname } = useLocation();
  // Remove *initial* slash and split the rest
  const breadcrumbs = pathname.replace(/(^\/|\/$)/g, '').split('/');
  console.log('Breadcrumbs:', breadcrumbs);

  if (breadcrumbs[0] == 'product') {
    breadcrumbs.pop();
  }

  /**
   * @param {string} segment 
   */
  function combinePathUntil(segment: string) {
    const segmentIdx = breadcrumbs.indexOf(segment);
    const pathUntilSegment = breadcrumbs.slice(0, segmentIdx+1);
    return '/' + pathUntilSegment.join('/');
  }

  return (
    <nav className='nav-bar'>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {breadcrumbs.map((page, index, breadcrumbs) => (
          <li key={index}>
            {index === breadcrumbs.length - 1 ?
              <p>{page}</p>
              :
              <a href={combinePathUntil(page)}>
                {page}
              </a>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;