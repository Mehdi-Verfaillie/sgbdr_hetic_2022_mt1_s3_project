import React from 'react';
import './reset.css'
import { Poster } from './components/Poster';
import styled from 'styled-components';

function App() {
  return (
    <Body>
      <FilmListContainer>
        {[{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"}, {id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},{id: "1", title: "HelloWorld", price: "HelloWorld", rank: "HelloWorld", genre: "HelloWorld", rantal: "HelloWorld"},].map((film) => (
          <Poster
            key={film.id}
            title={film.title}
            price={film.price}
            rank={film.rank}
            genre={film.genre}
            rantal={film.rantal}
          />
        ))}
      </FilmListContainer>
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

const FilmListContainer = styled("div")`
overflow: visible;
  width: 90%;
  max-width: 90%;
  max-height: 400rem;
  display: flex;
  justify-content: center;
  overflow: auto;

  div {
    margin: 1rem;
  }
`

export default App;
