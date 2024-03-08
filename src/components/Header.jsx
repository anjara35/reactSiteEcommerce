import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCartShopping, faClose, faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }


  return (
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="z-20">
            <Link className="text-2xl" to="/">E-Commerce</Link>
          </div>
          <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 ${toggle ? 'top-0' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link className="hover:text-gray-500" to="/">Home</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="z-20 flex items-center gap-6">
            <Link to="/panier"><FontAwesomeIcon icon={faCartShopping}/></Link>
            <Link to="/profile"><FontAwesomeIcon icon={faUser}/></Link>
            <div className="text-3xl cursor-pointer md:hidden" onClick={handleToggle}>
              {toggle?<FontAwesomeIcon icon={faClose} />:<FontAwesomeIcon icon={faBars}/>}
            </div>

          </div>
        </nav>
      </header>
  )
};

export default Header;
