import React, { useRef, useState, useEffect } from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

/* IMAGES */
import heroImg from "../assets/about/big-group-ground.jpg";
import trainingImg from "../assets/about/training-session.JPG";
import kidsImg from "../assets/about/kids-group-smiling.jpg";
import boyImg from "../assets/about/boy-dribbling.jpg";
import trophyImg from "../assets/about/trophy-winners.JPG";
import coachesImg from "../assets/about/coaches-team.jpg";

/* COUNTER ANIMATION */
const AnimatedCounter = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const duration = 1300;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return <div className="num">{count}+</div>;
};

/* OBSERVER HOOK */
const useInView = (ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return visible;
};

export default function About() {
  const countersRef = useRef(null);
  const showCounters = useInView(countersRef);

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-media container">
          <img src={heroImg} alt="Altius Academy" />
          <div className="hero-overlay">

            <div className="hero-pre">ALTIUS SPORTS ACADEMY</div>

            <h1 className="hero-title">
              <span>Discover</span>
              <span className="accent">Advance</span>
              <span>Triumph</span>
            </h1>

            <p className="hero-sub">
              Founded in 2021 — shaping confident players with discipline and passion.
            </p>

          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container who">

          <motion.div
            className="who-media"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src={trainingImg} alt="Training Session" />
          </motion.div>

          <motion.div
            className="who-body"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="who-title">Who We Are</div>
            <div className="underline"></div>

            <p className="who-desc">
              Altius began as a players’ club and evolved into an academy focused on steady
              progress, disciplined training, and celebrating meaningful growth.
            </p>

            <div ref={countersRef}>
              <div className="counters-strip">
                <div className="container counters">

                  <div className="counter">
                    <AnimatedCounter value={400} start={showCounters} />
                    <div className="label">Players Trained</div>
                  </div>

                  <div className="counter">
                    <AnimatedCounter value={40} start={showCounters} />
                    <div className="label">Achievements</div>
                  </div>

                  <div className="counter">
                    <AnimatedCounter value={4} start={showCounters} />
                    <div className="label">Years of Growth</div>
                  </div>

                  <div className="counter">
                    <AnimatedCounter value={6} start={showCounters} />
                    <div className="label">Certified Coaches</div>
                  </div>

                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* PHILOSOPHY (ORDER FIXED) */}
      <section className="philosophy">
        <div className="container">

          <h3
            style={{
              fontFamily: "Poppins",
              color: "var(--accent)",
              fontWeight: 800,
              marginBottom: "18px"
            }}
          >
            Our Philosophy
          </h3>

          <div className="philos-card-wrapper">

            {/* 1 — DISCOVER */}
            <motion.div
              className="philo-sub"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="philo-img-box">
                <img src={boyImg} alt="Discover" />
              </div>

              <div className="philo-sub-text">
                <div className="philo-sub-title">Discover</div>
                <div className="philo-sub-desc">
                  A space to learn fundamentals, explore strengths, and understand the game.
                </div>
              </div>
            </motion.div>

            {/* 2 — ADVANCE */}
            <motion.div
              className="philo-sub"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <div className="philo-img-box">
                <img src={kidsImg} alt="Advance" />
              </div>

              <div className="philo-sub-text">
                <div className="philo-sub-title">Advance</div>
                <div className="philo-sub-desc">
                  Structured coaching that steadily builds technical mastery and confidence.
                </div>
              </div>
            </motion.div>

            {/* 3 — TRIUMPH */}
            <motion.div
              className="philo-sub"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <div className="philo-img-box">
                <img src={trophyImg} alt="Triumph" />
              </div>

              <div className="philo-sub-text">
                <div className="philo-sub-title">Triumph</div>
                <div className="philo-sub-desc">
                  Celebrating every milestone — building long-term success.
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* COACHES SECTION */}
      <section className="coaches-new">
        <div className="container coaches-grid">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="coaches-heading">Our Champions in the Making</h2>

            <p className="coaches-sub">
              Our certified and experienced coaches guide players with a structured,
              disciplined, and supportive training approach. With a strong focus on
              fundamentals, confidence-building, and long-term player growth, they ensure
              every athlete learns, improves, and thrives at their highest potential.
            </p>
          </motion.div>

          <motion.div
            className="coaches-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="coaches-img-frame">
              <img src={coachesImg} alt="Coaching Team" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* END BANNER */}
      <section className="end-banner">
        <div className="container">
          <h2>At Altius, every step forward becomes a strength.</h2>
        </div>
      </section>

    </div>
  );
}
