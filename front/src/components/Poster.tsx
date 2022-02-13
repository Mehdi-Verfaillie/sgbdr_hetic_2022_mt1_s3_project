import { Movie } from '../api/types';
import React from 'react';
import styled from "styled-components";

export const Poster = (props: Movie): JSX.Element => {    
    return (
        <Container>
            <Text>Titre: {props.title}</Text>
            <Text>Prix: {props.category}</Text>
            <Text>Classement: {props.rating}</Text>
            <Text>Genre: {props.amount}</Text>
            <Text>Loué {props.rental} fois</Text>
        </Container>
    )
}

const Container = styled("div")`
    background: linear-gradient(rgba(180, 82, 255, 0.2) 0%, rgba(234, 114, 106, 0.2) 33.51%), rgb(1, 16, 28);
    padding: 46px 24px 0px;
    width: 200px;
    height: 250px;
    padding: 46px 24px 0px;
    border-width: 1.5px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    border-radius: 24px;
`


const Text = styled("p")`
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1.1875;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: rgb(255, 255, 255);
    margin: 0.5rem 0;
`