import React from "react";
import img1 from "../assets/2.webp";
import img2 from "../assets/4.webp";
import img3 from "../assets/12.jpg";
import { Gi3DGlasses, GiHastyGrave } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Mietek Kosz i&nbsp;jego ...</h2>
      <section>
        <TestimonialCard
          name={<Gi3DGlasses />}
          feedback={"depresja"}
          img={img1}
        />
        <TestimonialCard
          name={<BiDrink />}
          feedback={"alkoholizm"}
          img={img2}
        />
        <TestimonialCard
          name={<GiHastyGrave />}
          feedback={"tajemnicza śmierć"}
          img={img3}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback, img }) => (
  <article>
    <img src={img} alt="..." />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
