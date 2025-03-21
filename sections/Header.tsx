"use client";
import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
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
