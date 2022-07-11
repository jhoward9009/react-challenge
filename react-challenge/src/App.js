import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import ReachMe from './components/Reach-Me'
import Resume from './components/Resume'



function App() {
  return( <div>
<Header></Header>
<About></About>
<Projects></Projects>
<Resume></Resume>
<ReachMe></ReachMe>
<Footer></Footer>
</div>

    
  );
}

export default App;
