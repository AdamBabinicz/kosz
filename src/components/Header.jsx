import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>jazz</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Start
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Fototeka
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Dyskografia
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Ciekawostki
      </a>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Dramat
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Kontakt
      </a>
    </div>
    <a href="mailto:puaro@vp.pl">
      <button>Email</button>
    </a>
  </>
);

export default Header;
