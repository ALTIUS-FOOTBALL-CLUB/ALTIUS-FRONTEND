import React, { useState } from "react";
import "../styles/venues.css";

import villivakkam from "../assets/venues/villivakkam.jpg";
import aminjikarai from "../assets/venues/aminjikarai.jpg";
import annanagar from "../assets/venues/annanagar.jpg";
import kolathur from "../assets/venues/kolathur.jpg";
import injambakkam from "../assets/venues/Injambakkam.jpg";
import madipakkam from "../assets/venues/madipakkam.jpg";

export default function Venues() {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const venues = [
    {
      id: 1,
      img: villivakkam,
      name: "One O One Turf",
      subtitle: "Community Open Ground",
      location: "Villivakkam",
      schedule: "Saturday & Sunday — 6:00–7:00 AM",
      address: "8, Agathiyar Nagar Extn 2nd St, Villivakkam, Chennai 600049",
      map: "https://maps.app.goo.gl/VUhue3L2mFUfKk1a8",
    },
    {
      id: 2,
      img: aminjikarai,
      name: "Double Dribble",
      subtitle: "Covered Terrace Turf",
      location: "Aminjikarai",
      schedule: "Mon / Wed / Fri — 6–7 AM & 6–8 PM",
      address:
        "Ampa Skywalk Terrace, Nelson Manickam Road, Chennai 600030",
      map: "https://maps.app.goo.gl/eSgRZkwZeXqLm6ps6",
    },
    {
      id: 3,
      img: annanagar,
      name: "Crescent Ground",
      subtitle: "Senior Training Pitch",
      location: "Anna Nagar",
      schedule: "Daily — 6:00–7:30 AM",
      address: "Bharathi Puram, Shenoy Nagar, Chennai 600030",
      map: "https://maps.app.goo.gl/RWCsBTVRbzWTBP8c6",
    },
    {
      id: 4,
      img: kolathur,
      name: "Ginga Indoor Arena",
      subtitle: "Indoor Training Arena",
      location: "Kolathur",
      schedule: "Tue / Wed / Thu — 6–7 PM",
      address: "Padma Nagar, Red Hills Rd, Kolathur, Chennai 600099",
      map: "https://maps.app.goo.gl/YtycNkXApmuvyAqh7",
    },
    {
      id: 5,
      img: injambakkam,
      name: "Tiki Taka @ VAELS",
      subtitle: "Coastal Training Ground",
      location: "Injambakkam",
      schedule: "Mon / Wed / Fri — 6–7 PM",
      address:
        "Pon Vidhyashram Gardens, SH 49, Injambakkam, Chennai 600115",
      map: "https://maps.app.goo.gl/D3q2CybiEJry2Kb38",
    },
    {
      id: 6,
      img: madipakkam,
      name: "Strikerz Turf",
      subtitle: "Kids Weekend Turf",
      location: "Madipakkam",
      schedule: "Tue / Thu / Sat / Sun — 4–6 PM",
      address:
        "261 Padmavathi St, Srinivasa Nagar, Madipakkam, Chennai 600091",
      map: "https://maps.app.goo.gl/KTHKmauJhL58ZZ899",
    },
  ];

  return (
    <section className="venues-section">

      <h2 className="venues-main-title">Training Centers</h2>

      <div className="venues-list">
        {venues.map((v, index) => (
          <div
            key={v.id}
            className={`venue-card-row ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            {/* LEFT IMAGE */}
            <div className="venue-image-card floating-card">
              <div className="shine-effect"></div>
              <img src={v.img} alt={v.name} className="venue-image" />
            </div>

            {/* RIGHT TEXT */}
            <div
              className={`venue-text-card ${openCards[v.id] ? "pop-in" : "pop-out"}`}
              onClick={() => toggleCard(v.id)}
            >
              <h3 className="venue-title">{v.name}</h3>
              <p className="venue-sub">{v.subtitle} • {v.location}</p>

              {openCards[v.id] && (
                <div className="venue-details">
                  <p><strong>Schedule:</strong> {v.schedule}</p>
                  <p><strong>Address:</strong> {v.address}</p>

                  {/* LOCATION BOX */}
                  <a
                    className="location-box"
                    href={v.map}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 Locate on Map
                  </a>
                </div>
              )}

              <p className="toggle-text">
                {openCards[v.id] ? "Click to hide" : "Click to view details"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
