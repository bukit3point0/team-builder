import './App.css';
import React, {useState, useEffect} from 'react'
import axios from './TeamData'

// import Teammates from '.axios/Teammates.js'
import Title from './Title'
import AddTeammate from './AddTeammate'

function App() {

  return (
    <div>
      <Title/>
      <AddTeammate />
    </div>
  );
}

export default App;
