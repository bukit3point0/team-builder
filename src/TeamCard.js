import React from 'react'
import styled from 'styled-components'

const CardCont = styled.div`
    padding: .25rem 1rem;
    margin: 1rem;
    border: 4px dotted black;
    width: 20%;    
`
const Name = styled.h2``
const Role = styled.p``
const Email = styled.p``

const TeamCard = props => {

    const {person} = props
    console.log(person)

    return (
        <CardCont>
            <Name>{person.person}</Name>
            <Role>{person.role}</Role>
            <Email>{person.email}</Email>
        </CardCont>
    )
}

export default TeamCard