import './App.css';
import Creatures from './creatures/Creatures.js'
import Creature from './creature/Creature.js'
import { useState } from 'react';

function App() {
  const [showCreatures, setShowCreatures] = useState(false);
  const [showCreatureSearch, setShowCreatureSearch] = useState(false);

  const showList = () => {
    setShowCreatures(!showCreatures);
  }

  const showForm = () => {
    setShowCreatureSearch(!showCreatureSearch);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 className='clickToShow'
            onClick={showList}>
            Complete list of creatures
            {showCreatures && <Creatures />}
          </h2>
        </div>
        <div>
          <h2 onClick={showForm}>Search for creature</h2>
          {showCreatureSearch && <Creature />}
        </div>
      </header>
    </div>
  );
}

export default App;
