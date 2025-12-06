import { useNavigate } from "react-router-dom";
import "../styles/coaches.css";
import Navbar from "../components/navbar";

import shriram from "../assets/coaches/shriram.PNG";
import bhoosan from "../assets/coaches/bhoosan.PNG";
import surya from "../assets/coaches/surya.PNG";

const coaches = [
  {
    id: "shriram-srinivasan",
    name: "Shriram Srinivasan",
    title: "Academy Manager",
    img: shriram,
    venues: "Aminjikarai, Madipakkam, Villivakkam, Injambakkam, Kolathur",
    age: "U8 / U10 / U12 / U14 / U16 / Seniors",
    exp: "7 years",
    cert: "UEFA B / MSc Sports Management",
  },
  {
    id: "bhoosanam",
    name: "R. Bhoosanam",
    title: "Head Coach",
    img: bhoosan,
    venues: "Aminjikarai",
    age: "U14 / U16",
    exp: "11 years",
    cert: "AIFF D / NIS Certification",
  },
  {
    id: "surya-kannusamy",
    name: "Surya Kannusamy",
    title: "Head Coach",
    img: surya,
    venues: "Aminjikarai",
    age: "U8 / U10 / U12",
    exp: "8 years",
    cert: "AFC C / NIS Certification",
  },
];

const Coaches = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="coaches-page">
        <h1 className="page-title">OUR COACHES</h1>

        <div className="coach-grid">
          {coaches.map((c) => (
            <div
              key={c.id}
              className="coach-card"
              onClick={() => navigate(`/coaches/${c.id}`)}
            >
              <img src={c.img} className="coach-img" />
              <h3>{c.name}</h3>
              <p className="coach-role">{c.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Coaches;
