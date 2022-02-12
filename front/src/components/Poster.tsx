import React from 'react';
import styled from "styled-components";


interface Props {
    title: string;
    price: string;
    rank: string;
    genre: string;
    rantal: string;
}

export const Poster = (props: Props): JSX.Element => {    
    return (
        <Container>
            Titre: {props.title}
            Prix: {props.price}
            Classement: {props.rank}
            Genre: {props.genre}
            Loué {props.rantal} fois
        </Container>


        
    )
}

const Container = styled("div")`
    background: gray;
    width: 200px;
    height: 350px;
`