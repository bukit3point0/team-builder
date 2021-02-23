import React from 'react'
import d20 from './images/d20.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 2%;
`

const D20image = styled.img`
    padding: 1rem;
`

const Squad = styled.h1`
    text-align: center;
    font-size: 4rem;
    padding: 1rem;
`

const Title = props => {


    return (
        <HeaderContainer>
            <D20image src={d20}/>
            <Squad>Dork Squad</Squad>
            <D20image src={d20}/>
        </HeaderContainer>
    )
}

export default Title