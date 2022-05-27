import React from 'react'
import Link from 'next/link'
import navstyles from '../styles/Navbar.module.css'

const Navbar : React.FC = () => {
  return (
    <header>
        <div className={navstyles.container}>
            <div className={navstyles.logo}>
                <h1>Omniverse</h1>
            </div>
            <ul className={navstyles.navLinks}>
                <li><Link href="/">Omniverse</Link></li>
                <li><Link href='/mint'><a className={navstyles.active}>Greg</a></Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar