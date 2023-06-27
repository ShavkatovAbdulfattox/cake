import React from 'react'
import styled from "styled-components"
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Wrapper>
      <Navbar/>
      <Home/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`


export default App
