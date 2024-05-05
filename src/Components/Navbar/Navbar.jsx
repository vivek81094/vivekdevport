import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { getImageUrl } from '../../utils'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuHandler=()=>{
        setMenuOpen(!menuOpen)
    }
  return (
    <nav className={styles.navbar}>
      
      <a className={styles.title} href="/" >Port<span className={styles.color}>folio</span></a>
     
      <div className={styles.menu}> 
      <img  className={styles.menuBtn} src={ getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={menuHandler} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={menuHandler}>    
            <li>    
                <Link to="/">HOME</Link>  
            </li>
            <li>    
                <Link to="/about" >ABOUT</Link>  
            </li>
            <li>    
                <Link to="/skills" >SKILLS</Link>
            </li>
            <li>    
                <Link to="/project" >PROJECT</Link>    
            </li>
            <li>      
                <Link to="/contact" >CONTACT</Link>
            </li>
        </ul>
     
      </div>
    </nav>
  )
}

export default Navbar
