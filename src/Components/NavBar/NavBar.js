import { useState } from 'react';
import './../../assets/css/navbar.css'

const NavBar = () => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);
  
    const handleClick = (page) => {
      const pageExists = breadcrumbs.includes(page);
  
      if (!pageExists) {
        setBreadcrumbs([...breadcrumbs, page]);
      }
    };
  
    return (
      <nav className='nav-bar'>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {breadcrumbs.map((page, index) => (
            <li key={index}>
              <a href="#" onClick={() => handleClick(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
export default NavBar;