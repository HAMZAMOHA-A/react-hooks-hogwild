import React, { useState } from 'react';

const HogForm = ({ addHog }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState(0);
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = { name, specialty, weight, greased, highestMedal, image: 'default_image_url' };
    addHog(newHog);
    setName('');
    setSpecialty('');
    setWeight(0);
    setGreased(false);
    setHighestMedal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Specialty" 
        value={specialty} 
        onChange={(e) => setSpecialty(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Weight" 
        value={weight} 
        onChange={(e) => setWeight(Number(e.target.value))} 
      />
      <label>
        Greased:
        <input 
          type="checkbox" 
          checked={greased} 
          onChange={() => setGreased(!greased)} 
        />
      </label>
      <input 
        type="text" 
        placeholder="Highest Medal" 
        value={highestMedal} 
        onChange={(e) => setHighestMedal(e.target.value)} 
      />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;
