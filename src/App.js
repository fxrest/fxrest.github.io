import './App.css';
import Creatures from './creatures/Creatures.js'
import { useState } from 'react';

function App() {
  const [showCreatures, setShowCreatures] = useState(true);

  const showCreaturesHandle = () => {
    setShowCreatures(!showCreatures);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 onClick={showCreaturesHandle}>Complete list of creatures.</h2>
        {showCreatures && <Creatures />}
      </header>
    </div>
  );
}

export default App;
