import React from "react";
import "../styles/coaches.css";

const CoachModal = ({ coach, close }) => {
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={close}>×</button>

        <img src={coach.img} alt={coach.name} className="modal-img" />

        <h2 className="modal-name">{coach.name}</h2>
        <p className="modal-role">{coach.role}</p>

        <div className="modal-info">
          <p><strong>Venues:</strong> {coach.venues}</p>
          <p><strong>Age Groups:</strong> {coach.ageGroups}</p>
          <p><strong>Experience:</strong> {coach.experience}</p>
          <p><strong>Licenses:</strong> {coach.licenses}</p>
        </div>
      </div>
    </div>
  );
};

export default CoachModal;
