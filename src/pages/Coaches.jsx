import "../styles/coaches.css";
import Navbar from "../components/Navbar";


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
  return (
    <>
      <Navbar />

      <section className="coaches-page">
        <h1 className="page-title">OUR COACHES</h1>

        <div className="flip-grid">
          {coaches.map((c) => (
            <div key={c.id} className="flip-card">
              <div className="flip-card-inner">

                {/* FRONT */}
                <div className="flip-card-front">
                  <img src={c.img} alt={c.name} className="flip-img" />
                  <h2 className="flip-name">{c.name}</h2>
                  <p className="flip-title">{c.title}</p>
                </div>

                {/* BACK */}
                <div className="flip-card-back">
                  <h2 className="back-name">{c.name}</h2>

                  <p><strong>Venues:</strong> {c.venues}</p>
                  <p><strong>Age Groups:</strong> {c.age}</p>
                  <p><strong>Experience:</strong> {c.exp}</p>
                  <p><strong>License:</strong> {c.cert}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Coaches;
