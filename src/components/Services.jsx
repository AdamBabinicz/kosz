import React from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { GiGuitar, GiBandit } from "react-icons/gi";
import { FaBlind } from "react-icons/fa";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Ciekawostki</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>
            <GiBandit />
          </h3>
          <p>
            Przyciągał rozmaitych oszustów, którzy wykorzystywali jego sławę
            i&nbsp;pieniądze
          </p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <GiGuitar />
          <span>
            W latach 70 zasłynął jazzowymi wariacjami na temat „Yesterday”
            Beatlesów
          </span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <FiHeart />
          <span>
            W miłości też nie miał szczęścia. Nie ożenił się i&nbsp;nie miał
            dzieci, mimo że wiązał się z&nbsp;różnymi kobietami
          </span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <FaBlind />
          <span>
            Ray Charles, zachwycony jego muzyką, chciał sprowadzić niewidomego
            jazzmana do Stanów, lecz polskie władze nie zgodziły się
          </span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
