import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        flex w-full items-center justify-between sticky top-0 z-50 px-8 py-4 transition-all duration-300
        ${scrolled ? "bg-navbar-background backdrop-blur-md" : "bg-navbar-background"}
      `}
    >
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="quilljot logo" width={20} />
        <span className="font-bold text-foreground">QUILLJOT</span>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="hover:underline text-muted-foreground hover:text-foreground"
        >
          Features
        </a>
        <a
          href="#"
          className="hover:underline text-muted-foreground hover:text-foreground"
        >
          Pricing
        </a>
        <a
          href="#"
          className="hover:underline text-muted-foreground hover:text-foreground"
        >
          Resources
        </a>
        <Button variant="outline">Login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;