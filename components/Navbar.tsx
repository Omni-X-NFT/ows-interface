import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import OmniXLogo from "../static/logo/logowhite.png";
import { useRouter } from "next/router";
import navstyles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <header>
      <div className={navstyles.container}>
        <div className={navstyles.logo}>
          <div className={navstyles.logoImage}>
            <Image src={OmniXLogo} width={60} height={60} alt="logo" />
          </div>
          <div className={navstyles.logoImageText}>
            <h1>Omni X</h1>
          </div>
        </div>
        <div className={navstyles.links}>
          <ul className={navstyles.navLinks}>
            <li className={router.pathname == "/" ? `${navstyles.active}` : ""}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname == "/mint" ? `${navstyles.active}` : ""
              }
            >
              <Link href="/mint">Mint</Link>
            </li>
          </ul>
          <ul className={navstyles.navLinks}>
            <li className="">
              <Link href="https://forms.gle/on4AtahgUZxyWjuK9" target="_blank">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
