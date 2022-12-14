import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="navbar__links">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/works">
          <a>Works</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
