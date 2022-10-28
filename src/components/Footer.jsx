import React from "react";
import { AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import img from "../assets/2.jfif";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={img} alt="Founder" />

        <h2>„Polski Bill Evans”</h2>
        <p>
          Wybitny, wrażliwy artysta, który zapisał się na stałe w historii
          polskiej muzyki jazzowej i wywarł ogromny wpływ na polską szkołę
          jazzu.
        </p>
      </div>
      <aside>
        <h2>Media</h2>

        <article>
          <a
            href="https://www.youtube.com/watch?v=obn4MI2lDl8"
            target={"blank"}
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://mobile.twitter.com/hashtag/Mieczys%C5%82awKosz?src=hash"
            target={"blank"}
          >
            <FaTwitter />
          </a>
          <a
            href="https://pl-pl.facebook.com/people/Mieczys%C5%82aw-Kosz/100063632710178/?fref=nf"
            target={"blank"}
          >
            <FaFacebook />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
      <br />
      <p>Radom 2022 - {new Date().getFullYear()}.</p>
    </footer>
  );
};

export default Footer;
