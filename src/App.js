import './App.scss';
import Creatures from './creatures/Creatures.js'
import Creature from './creature/Creature.js'
import { useState } from 'react';

function App() {
  const [showCreatures, setShowCreatures] = useState(false);
  const [showCreatureSearch, setShowCreatureSearch] = useState(false);

  const showList = () => {
    setShowCreatures(!showCreatures);
    showCreatureSearch && setShowCreatureSearch(!showCreatureSearch);
  }

  const showForm = () => {
    setShowCreatureSearch(!showCreatureSearch);
    showCreatures && setShowCreatures(!showCreatures);
  }

  return (
    <div className="App">
      <main className="App-main">
        <h1>Pick what you want to see:</h1>
        <div className='holder'>
          <h2 className='clickToShow' onClick={showList}>
            Complete list of creatures
          </h2>
          {showCreatures && <Creatures />}
        </div>
        <div className='holder'>
          <h2 className='clickToShow' onClick={showForm}>Search for creature</h2>
          {showCreatureSearch && <Creature />}
        </div>
      </main>
    </div>
  );
}

export default App;
