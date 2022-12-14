import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">Home</Link>
      </div>
      <div className="navbar__links">
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
