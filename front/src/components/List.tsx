import { Movie } from '@/api/types';
import React from 'react';
import styled from 'styled-components';
import { Poster } from './Poster';

interface Props {
  films: Movie[];
}

export const List = (props: Props) => {
    return (
        <FilmListContainer>
            {props.films.length >0 && props.films.map((film) => (
                <Poster key={film.id} {...film}/>
            ))}
        </FilmListContainer>
    )
}


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