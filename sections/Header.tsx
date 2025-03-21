"use client";
import React from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4">
      {/* AAAAAAAAAA */}
      <LinkScroll
        to="pricing"
        smooth
        spy
        offset={-100}
        className="cursor-pointer"
      >
        Pricing
      </LinkScroll>
      <LinkScroll to="home" smooth spy offset={-100} className="cursor-pointer">
        Home
      </LinkScroll>
    </header>
  );
};

export default Header;
