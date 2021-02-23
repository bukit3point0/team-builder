import React from 'react'
import TeamCard from './TeamCard'
import styled from 'styled-components'

const Teammate = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
`

const CurrentTeam = props => {

    const {team} = props

    return (
        <Teammate>
            {team.map(person => {
                return (
                    <TeamCard key={person.id} person={person}/>
                )
            })}
        </Teammate>
    )
}

export default CurrentTeam