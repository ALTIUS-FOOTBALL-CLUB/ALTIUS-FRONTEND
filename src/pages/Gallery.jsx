import React, { useState, useEffect } from "react";
import "../styles/gallery.css";


// IMPORT IMAGES
import img1 from "../assets/achievements/BestPlayerGrandEva.jpg";
import img2 from "../assets/achievements/BK.jpg";
import img3 from "../assets/achievements/GloryToGod.jpg";
import img4 from "../assets/achievements/GrandeEva.jpg";
import img5 from "../assets/achievements/GrandeEva2.jpg";
import img6 from "../assets/achievements/GrandEvawinner.jpg";
import img7 from "../assets/achievements/NanbaFC.jpg";
import img8 from "../assets/achievements/PH3rd.jpg";
import img9 from "../assets/achievements/PHU-12.jpg";
import img10 from "../assets/achievements/ProPlay.jpg";
import img11 from "../assets/achievements/VoltaJuniors.jpg";
import img13 from "../assets/achievements/VoltaS7.jpg";

// DATA
const ACHIEVEMENTS = [
  {
    title: "B.K. Sports Academy Tournament – U13 Winners",
    desc:
      "A dominant tournament run led by exceptional teamwork and discipline. " +
      "The players showcased smart decision-making and relentless energy in every match. " +
      "A proud championship moment reflecting true Altius spirit.",
    img: img2,
  },
  {
    title: "Glory To God Tournament – U11 Runners",
    desc:
      "Our young U11 warriors displayed incredible determination from start to finish. " +
      "Their unity, courage, and never-give-up attitude carried them to the finals. " +
      "A remarkable performance worthy of great admiration.",
    img: img3,
  },
  {
    title: "Grande Eva Tournament – U15 Runners",
    desc:
      "The U15 squad delivered a powerful and spirited tournament campaign. " +
      "Their teamwork, resilience, and tactical maturity stood out in every game. " +
      "A well-earned runners-up title showcasing true dedication.",
    img: img4,
  },
  {
    title: "Grande Eva Tournament – U18 Winners",
    desc:
      "A sensational victory powered by discipline, strategy, and leadership. " +
      "The U18 athletes demonstrated professionalism beyond their age. " +
      "A championship earned through relentless effort and unity.",
    img: img5,
  },
  {
    title: "Grande Eva Tournament – U18 Winners (Team Champions)",
    desc:
      "A complete team performance where every player stepped up when needed. " +
      "Strong communication, flawless execution, and unstoppable passion defined their journey. " +
      "A championship win that reflects the heart of Altius training.",
    img: img6,
  },
  {
    title: "Grande Eva Tournament U18 – Best Players Award",
    desc:
      "An award recognizing extraordinary talent and on-field intelligence. " +
      "The players showcased leadership, consistency, and incredible match influence. " +
      "A performance that sets a benchmark for future Altius athletes.",
    img: img1,
  },
  {
    title: "Nanba FC League – III Place",
    desc:
      "Despite tough competition, the squad held their ground with confidence. " +
      "Their progress, discipline, and tactical improvement were evident each week. " +
      "A strong third-place finish built on perseverance and growth.",
    img: img7,
  },
  {
    title: "P.H. Sports Academy Tournament – III Place",
    desc:
      "The team fought every match with heart and determination. " +
      "Their competitive mindset and teamwork carried them through tough moments. " +
      "A well-earned top-three finish showcasing true grit.",
    img: img8,
  },
  {
    title: "P.H. Sports Academy Tournament U12 – III Place",
    desc:
      "The U12 team showed incredible potential with disciplined play and high energy. " +
      "Every player contributed with courage and commitment. " +
      "A promising third-place result marking the rise of future stars.",
    img: img9,
  },
  {
    title: "Pro Play Sports Tournament – U13 III Place",
    desc:
      "The U13 squad demonstrated remarkable improvement throughout the tournament. " +
      "They competed with confidence, creativity, and great sportsmanship. " +
      "A deserving podium finish highlighting their steady development.",
    img: img10,
  },
  {
    title: "Volta League Juniors – Season 6",
    desc:
      "A memorable season filled with learning, passion, and unforgettable moments. " +
      "The players grew tremendously in skill, composure, and maturity. " +
      "A proud chapter in their journey through the league.",
    img: img11,
  },
  {
    title: "Volta League Juniors – Season 7",
    desc:
      "The team showcased exceptional teamwork and enthusiasm throughout the season. " +
      "Their hunger to learn and perform lifted their game to new heights. " +
      "A strong campaign reflecting steady progress and positive spirit.",
    img: img13,
  },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (idx) => {
    setActiveIndex(idx);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveIndex(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
     

      <div className="achievements-page">
        <header className="achievements-hero">
          <h1>Achievements & Highlights</h1>
          <p>Celebrating the wins, grit and moments that make our academy proud.</p>
        </header>

        <main className="achievements-list">
          {ACHIEVEMENTS.map((item, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <section className={`achievement-row ${isReverse ? "reverse" : ""}`} key={idx}>
                <div className="achievement-media" onClick={() => openModal(idx)}>
                  <img src={item.img} alt={item.title} draggable="false" />
                </div>

                <div className="achievement-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </section>
            );
          })}
        </main>
      </div>

      {/* MODAL */}
      {modalOpen && activeIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>

            <img src={ACHIEVEMENTS[activeIndex].img} alt={ACHIEVEMENTS[activeIndex].title} />

            <div className="modal-caption">
              <h3>{ACHIEVEMENTS[activeIndex].title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
