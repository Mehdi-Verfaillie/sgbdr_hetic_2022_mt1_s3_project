import { Movie } from "@/api/types";
import React from "react";
import { List } from "./List";
import { Pagination } from "./Pagination";

interface Props {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  list?: Movie[];
}

export const StatefulList = (props: Props): JSX.Element => {
  if (props.isLoading) return <div>loading...</div>;
  if (props.isError) return<div>error...</div>;
  if (props.isEmpty) return <div>empty list...</div>;

  return (
    <div>
      <List films={props.list!} />
      <Pagination />
    </div>
  );
};
