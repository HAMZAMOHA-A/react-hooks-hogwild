import React, { useState } from 'react';
import Nav from './Nav';
import HogList from './HogList';
import HogForm from './HogForm';
import hogs from './porkers_data'; // Adjust path if necessary

function App() {
	
  const [hogsData, setHogsData] = useState(hogs);
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [sortBy, setSortBy] = useState('');
  const [greasedFilter, setGreasedFilter] = useState(false);
  
  const handleFilter = () => {
    setGreasedFilter(!greasedFilter);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sortedHogs = [...filteredHogs].sort((a, b) => {
      if (criteria === 'name') {
        return a.name.localeCompare(b.name);
      } else if (criteria === 'weight') {
        return a.weight - b.weight;
      }
      return 0;
    });
    setFilteredHogs(sortedHogs);
  };

  const addHog = (newHog) => {
    setHogsData([...hogsData, newHog]);
    setFilteredHogs([...filteredHogs, newHog]);
  };

  const visibleHogs = filteredHogs.filter(hog => 
    !greasedFilter || hog.greased
  );

  return (
    <div className="App">
      <Nav onFilter={handleFilter} onSort={handleSort} />
      <HogList hogs={visibleHogs} />
      <HogForm addHog={addHog} />
    </div>
  );
}

export default App;
