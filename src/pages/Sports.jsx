import React from "react";
import "../styles/sports.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Sport videos
import footballVid from "../assets/sports/football.mp4";
import chessVid from "../assets/sports/chess.mp4";
import pickleVid from "../assets/sports/pickleball.mp4";

const Sports = () => {
  return (
    <>
      <Navbar />

      {/* FULL PAGE WRAPPER */}
      <div className="sports-page">

        {/* HERO SECTION */}
        <section className="sports-hero">
          <div className="sports-hero-overlay"></div>

          <h1 className="sports-title">Our Sports Programs</h1>
          <p className="sports-sub">
            Excellence, Discipline & Passion—Shaping the athletes of tomorrow.
          </p>
        </section>

        {/* MAIN CONTENT */}
        <section className="sports-container">

          {/* FOOTBALL */}
          <div className="sport-card reveal">
            <video
              className="sport-video"
              src={footballVid}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="sport-content">
              <h2>Football Training</h2>
              <p>
                Experience structured football training designed to build agility,
                ball control, teamwork, and match intelligence. Our sessions focus
                on essential fundamentals, tactical understanding, strength
                development, and competitive exposure. Altius footballers continue
                to shine in district and state-level tournaments.
              </p>
            </div>
          </div>

          {/* CHESS */}
          <div className="sport-card reveal reverse">
            <video
              className="sport-video"
              src={chessVid}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="sport-content">
              <h2>Online Chess Program</h2>
              <p>
                Build strategic thinking and sharp decision-making through our
                interactive online chess training. Students learn openings,
                tactical puzzles, middle-game strategy, endgame theory, and
                tournament preparation—all from the comfort of home with guided
                mentorship and structured practice.
              </p>
            </div>
          </div>

          {/* PICKLEBALL */}
          <div className="sport-card reveal">
            <video
              className="sport-video blur-video"
              src={pickleVid}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="sport-content">
              <h2>Pickleball Training</h2>
              <p className="coming-soon">LAUNCHING SOON</p>
              <p>
                Pickleball is a fast-paced sport blending badminton, tennis, and
                table tennis. Our upcoming pickleball program will enhance player
                agility, coordination, reflexes, and smart shot selection. Stay
                tuned—an exciting new sport is joining the Altius lineup soon!
              </p>
            </div>
          </div>

        </section>
        
      </div>
    </>
  );
};

export default Sports;
