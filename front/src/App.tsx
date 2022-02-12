import React from 'react';
import './reset.css'
import styled from 'styled-components';
import { FilmList } from './components/FilmList';

function App() {
  return (
    <Body>
      <FilmList />
    </Body>
  );
}
const Body = styled("body")`
  background-image: linear-gradient(180deg, #973e94, #6e31bb 31%, #01101c 93%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default App;
