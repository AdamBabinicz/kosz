import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronBarDown } from "react-icons/bs";
import me from "../assets/1.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = (key) => {
    animate(0, 1944, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(1944, 1973, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Mieczysław Kosz <br />
          </motion.h1>
          <Typewriter
            options={{
              strings: ["genialny niewidomy pianista jazzowy"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:puaro@vp.pl">Napisz!</a>
            <a href="#work">
              Fototeka <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              {ratio < 3 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
              '
            </p>
            <span>urodził się</span>
          </article>
          <aside>
            <article>
              <p>
                {ratio < 3 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  ></motion.span>
                )}
                '
              </p>
              <span>zmarł</span>
            </article>
            <article data-special>
              <p>Kontakt</p>
              <span>puaro@vp.pl</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="..." />
      </section>
      <BsChevronBarDown />
    </div>
  );
};

export default Home;
