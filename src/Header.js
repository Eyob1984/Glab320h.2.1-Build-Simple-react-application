import React from 'react'
import style, { styled } from'styled-components'

const Div = styled.h1`
border: 5px outset pink;
&:hover {
  background-color: yellow;
}`

export default function Header() {
  return (
    <Div>
    <h1>Simple React Application</h1>
    </Div>)
}
