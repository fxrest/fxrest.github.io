import './App.scss';
import Navbar from './navbar/Navbar.js';
import Footer from './footer/Footer.js'
import Creatures from './creatures/Creatures.js'
import Creature from './creature/Creature.js'
import { useState } from 'react';

function App() {
  const [showCreatures, setShowCreatures] = useState(false);
  const [showCreatureSearch, setShowCreatureSearch] = useState(false);
  const [selected, setSelected] = useState(null);

  const showList = () => {
    setShowCreatures(!showCreatures);
    showCreatureSearch && setShowCreatureSearch(!showCreatureSearch);
  }

  const showForm = () => {
    setShowCreatureSearch(!showCreatureSearch);
    showCreatures && setShowCreatures(!showCreatures);
  }

  const selectAndToggle = (name) => {
    setSelected(name)
    showForm()
  }

  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <h1>Choose one:</h1>
        <div className='holder'>
          <h2 className='clickToShow' onClick={showList}>List of creatures</h2>
          {showCreatures && <Creatures select={selectAndToggle} />}
        </div>
        <div className='holder'>
          <h2 className='clickToShow' onClick={showForm}>Search for creature</h2>
          {showCreatureSearch && <Creature selected={selected} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
