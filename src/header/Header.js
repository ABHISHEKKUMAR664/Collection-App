import React, { useState } from 'react'

const Header = () => {
   
    return (
       <header className="header" >
       <nav classname="nav-bar">
       <a className="nav-item" href="/color">Color</a>
       <a className="nav-item" href="/pokemon">Pokemon</a>
       <a className="nav-item" href="/monojit">Monojit</a>

       </nav>
       </header>
    )
}

export default Header;
