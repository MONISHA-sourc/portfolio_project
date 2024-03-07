import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import menu from  '../assets/menu.png';
import Logo from  '../assets/monisha (1).png';
const Navbar = () => {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={Logo} alt='Logo' className='logo'/>
      <div className='desktopMenu'>
        <Link  activeClass='active' to='intro' spy={true}  smooth={true} offset={-100}  duration={500} className='desktopMenuListItem'>Home</Link>
        <Link  activeClass='active' to='skills' spy={true}  smooth={true} offset={-50}  duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-50}  duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true}  smooth={true} offset={-50}  duration={500} className='desktopMenuListItem'>Clients</Link>
      </div>
      <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>Contact Me</button>

        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowmenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
        <Link  activeClass='active' to='intro' spy={true}  smooth={true} offset={-100}  duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Home</Link>
        <Link  activeClass='active' to='skills' spy={true}  smooth={true} offset={-50}  duration={500} className='listItem' onClick={()=>setShowmenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-50}  duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true}  smooth={true} offset={-50}  duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Clients</Link>
        <Link activeClass='active' to='clients' spy={true}  smooth={true} offset={-50}  duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}
export default Navbar