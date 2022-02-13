import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ChevronRight, ChevronBarRight, ChevronBarLeft, ChevronLeft } from "react-bootstrap-icons";
import { usePagination } from '../context/pagination.provider';

export const Pagination = (): JSX.Element => {
  const pagination = usePagination();

  const { startIndex, endIndex } = useMemo(
      () => ({
          startIndex: pagination.currentPage * pagination.pageSize + 1,
          endIndex: (pagination.currentPage + 1) * pagination.pageSize,
      }),
      [pagination.currentPage, pagination.pageSize]
  );

  return (
      <Container>
        <Text>
            {`${startIndex}-${endIndex} sur ${pagination.total ?? "-"}`}
        </Text>
        <ButtonContainer>
          <ChevronBarLeft onClick={() => pagination.goToPage(1)} />
        </ButtonContainer>

        <ButtonContainer>
          <ChevronLeft onClick={() => pagination.previousPage()} />
        </ButtonContainer>

        <CurrentPage>{pagination.currentPage}</CurrentPage>

        <ButtonContainer>
          <ChevronRight onClick={() => pagination.nextPage()} />
        </ButtonContainer>

        <ButtonContainer>
          <ChevronBarRight onClick={() => pagination.goToPage(pagination.pageLimit)} />
      </ButtonContainer>

      Filter by:
      {/* @ts-ignore */}
      <select onChange={(e) => pagination.setOrder(e.target.value)} value={pagination.orderType}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>

      {/* @ts-ignore */}
      <select onChange={(e) => pagination._setColumn(e.target.value)} value={pagination.column}>
        <option value="title">title</option>
        <option value="category">category</option>
        <option value="rental">rental</option>
      </select>
      </Container>
  );
}

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: #FFFFFF;
`;

const ButtonContainer = styled("div")`
  cursor: pointer;
`

const CurrentPage = styled("div")`
  padding: 0.281rem 0.563rem;
  border-radius: 0.313rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled("p")``;