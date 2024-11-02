import React, { useState } from 'react';

const HogTile = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ui card" onClick={handleClick}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h2>{hog.name}</h2>
        {showDetails && (
          <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal: {hog.highestMedal}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HogTile;
