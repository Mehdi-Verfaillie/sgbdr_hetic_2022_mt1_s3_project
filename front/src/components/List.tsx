import { Movie } from '../api/types';
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  height: 400px;
  overflow: scroll;
`