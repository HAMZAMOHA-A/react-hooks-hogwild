import React from 'react';
import HogTile from './HogTile';

const HogList = ({ hogs }) => {
  
  return (
    <div className="ui grid container">
      {hogs.map(hog => (
        <div className="ui eight wide column" key={hog.name}>
          <HogTile hog={hog} />
        </div>
      ))}
    </div>
  );
};

export default HogList;
