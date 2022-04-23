// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled.button`
position: fixed;
top: 1.5rem;
left: 50%;
transform: translate(-50%, 0);

background-color: ##1B24AF;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #1B24AF;
width: 3.5rem;
height: 3.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(27, 36, 175, 0.2);
    box-shadow: 0 0 8px 6px rgba(27, 36, 175, 0.2);;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
        <NavLink to="/">
        <PowerBtn width={30} height={30} fill='currentColor' />
        </NavLink>
        </Power>
    )
}

export default PowerButton
