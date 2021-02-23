import './App.css';
import React, {useState, useEffect} from 'react'
import axios from './TeamData'

// import Teammates from '.axios/Teammates.js'
import Title from './Title'
import AddTeammate from './AddTeammate'

const initial = {
  person: '',
  role: '',
  email: '',
}

function App() {

  
  const [teammates, setTeammates] = useState([])
  const [form, setForm] = useState(initial)
  // console.log(teammates)
  
  const updateForm = (inputName, inputValue) => {
    setForm({...form, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeammate = {
      name: form.person.trim(),
      role: form.role.trim(),
      email: form.email.trim(),
    }

    if(!newTeammate.person || !newTeammate.email || !newTeammate.role) {
      return
    }
    
    axios.post("teamdorksquad.com", newTeammate)
    .then(res => {
      setTeammates(teammates.concat(res.data))  
      setForm(initial)
    }).catch(err => {
      console.log(`IT'S HECKED ${err}`)
    });
  }

  useEffect(() => {
    axios.get("teamdorksquad.com")
    .then(res => {
      setTeammates(res.data)
    })
    .catch(err => {
      console.log(`Now you're friendless ${err}`)
    })
  },[])

  return (
    <div>
      <Title/>
      <AddTeammate 
        team={teammates} 
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
