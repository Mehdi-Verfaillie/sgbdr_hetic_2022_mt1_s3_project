import { Movie } from "../api/types";
import React from "react";
import { List } from "./List";
import { Pagination } from "./Pagination";
import styled from "styled-components";

interface Props {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  list?: Movie[];
}

export const StatefulList = (props: Props): JSX.Element => {
  if (props.isLoading) return <Text>loading...</Text>;
  if (props.isError) return<Text>error...</Text>;
  if (props.isEmpty) return <Text>empty list...</Text>;

  return (
    <div>
      <List films={props.list!} />
      <Pagination />
    </div>
  );
};

const Text = styled("p")`
     font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 1.1875;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: rgb(255, 255, 255);
    margin: 0.5rem 0;
`
