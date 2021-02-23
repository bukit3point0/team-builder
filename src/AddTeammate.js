import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from './TeamData'
import CurrentTeam from './CurrentTeam'

const Box = styled.form`
    border: 5px solid black;
    width: 60%;
    margin: 1% auto;
    padding: 0 1% 1%;
`

const Create = styled.h1``
const Category = styled.div``
const Instruction = styled.p``
const AddButton = styled.button`
    font-size: 2rem;
    margin-top: 2%;
`

const Name = styled.input``
const Role = styled.input``
const Email = styled.input``

const initial = {
    person: '',
    role: '',
    email: '',
  }

const AddTeammate = () => {

    const [teammates, setTeammates] = useState([])

    const [form, setForm] = useState(initial)

    const updateForm = (inputName, inputValue) => {
        setForm({...form, [inputName]: inputValue})
    }

    const submitForm = () => {

        const newTeammate = {
            person: form.person.trim(),
            role: form.role.trim(),
            email: form.email.trim()
        }

        if(!newTeammate.person  || !newTeammate.role || !newTeammate.email ) {
            return
        }

        axios.post("teamdorksquad.com", newTeammate)
        .then(res => {
            setTeammates(teammates.concat(res.data))  
            setForm(initial)
        })
        .catch(err => {
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


    const onChange = event => {
        const {name, value} = event.target;
        updateForm (name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submitForm()
    }

    return (
        <div>
         <CurrentTeam team={teammates}/>   
        <Box onSubmit={onSubmit}>
            <Create>Add Another Teammate?</Create>
            <Category>
                <Instruction>Name:</Instruction>
                <Name
                    type="text"
                    name="person"
                    value={teammates.person}
                    onChange={onChange}
                    placeholder="Name"
                    />
            </Category>
            <Category>
                <Instruction>Role:</Instruction>
                <Role
                    type="text"
                    name="role"
                    value={teammates.role}
                    onChange={onChange}
                    placeholder="Role"
                    />
            </Category>
            <Category>
                <Instruction>Email Address:</Instruction>
                <Email
                    type="email"
                    name="email"
                    value={teammates.email}
                    onChange={onChange}
                    placeholder="Email address"
                    />
            </Category>
            <AddButton>Welcome to the Team</AddButton>
        </Box>
        </div>
    )
}

export default AddTeammate