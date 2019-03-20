import * as React from 'react';
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link href='/'>
              <a className="navbar-item">Starter</a>
            </Link>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link href='/'>
                <a className="navbar-item">Home</a>
              </Link>
              <Link href='/about'>
                <a className="navbar-item">About</a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
