import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import navstyles from '../styles/Navbar.module.css'

const Navbar : React.FC = () => {
  const router = useRouter();
  return (
    <header>
        <div className={navstyles.container}>
            <div className={navstyles.logo}>
                <h1>Omni X</h1>
            </div>
            <ul className={navstyles.navLinks}>
                <li className={router.pathname == "/" ? `${navstyles.active}` : ''}><Link href="/">Home</Link></li>
                <li className={router.pathname == "/mint" ? `${navstyles.active}` : ''}><Link href='/mint'><a>Omni X</a></Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar