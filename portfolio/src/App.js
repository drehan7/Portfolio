import Home from './Home'
import './styles/App.css';
import React, { useState } from 'react';

function App() {

  const [section, setSection] = useState(null)


  return (
    (!section && <Home section={section} setSection={setSection} />)
  );
}

export default App;
