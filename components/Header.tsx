"use client";
import Link from "next/link";
import React from "react";
type NavLinkProps = {
  href: string;
  title: string;
};

const Header = () => {
  return (
    <header className="w-full h-20 bg-white">
      <div className="container flex items-center justify-between h-full w-full">
        <div>{/* <NavLink href="/pricing" title="Pricing" /> */}</div>
        <div className="flex items-center gap-4">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
