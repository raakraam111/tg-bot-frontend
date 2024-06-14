import React from 'react';

const Card = ({ icon, title, description, progress }) => {
  return (
    <div className="card">
      <img src={icon} alt="Icon" />
      <div className="card-title">{title}</div>
      {description && <div className="card-description">{description}</div>}
      {progress !== undefined && (
        <div className="card-progress">
          <div className="card-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default Card;