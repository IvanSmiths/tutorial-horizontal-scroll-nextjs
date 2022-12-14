import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">home</Link>
      </div>
      <div className="navbar__links">
        <Link href="/about">about</Link>
        <Link href="/works">works</Link>
        <Link href="/contact">contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
