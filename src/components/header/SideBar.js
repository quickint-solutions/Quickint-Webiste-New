"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function SideBar({ isSidebarOpen, toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuhome) => {
    setOpenMenu(openMenu === menuhome ? null : menuhome);
  };


  return (
    <div>
      <div id="side-bar" className={`side-bar header-two ${isSidebarOpen ? 'show' : ''}`}>
        <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
          <i className="far fa-times"></i>
        </button>
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li>
                <Link href="/" className="main" onClick={() => toggleMenu(0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <i className="fa-sharp fa-regular" />
                  About
                </Link>
              </li>


              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(3)}>
                  Services
                </Link>
                <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                  <li>
                    <Link href="/service-single">Software Development</Link>
                  </li>
                  <li>
                    <Link href="/cyber-security-service">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="/it-strategies">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/development-service">Mobile Development</Link>
                  </li>
                  <li>
                    <Link href="/it-consulting-service">IT Consulting & Advisory</Link>
                  </li>
                  <li>
                    <Link href="/cloud-service">Cloud Services</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/our-works" className="main">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/blog-grid" className="main" onClick={() => toggleMenu(4)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="contact" className="main">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="rts-social-border-area right-sidebar mt--80">
            <ul>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/ineelpatel2384/" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/quickint_solutions?igsh=dWg2Yzh6bHl2Y2gx" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile menu area end */}
      </div>

    </div>
  )
}

export default SideBar