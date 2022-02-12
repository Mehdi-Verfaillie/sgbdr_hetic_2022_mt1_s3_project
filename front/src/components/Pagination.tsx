import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ChevronRight, ChevronBarRight, ChevronBarLeft, ChevronLeft } from "react-bootstrap-icons";
import { usePagination } from '../context/pagination.provider';

export const Pagination = (): JSX.Element => {
  const pagination = usePagination();
  
  const { startIndex, endIndex } = useMemo(
      () => ({
          startIndex: (pagination.currentPage - 1) * pagination.pageSize + 1,
          endIndex: pagination.currentPage * pagination.pageSize,
      }),
      [pagination.currentPage, pagination.pageSize]
  );
  
  return (
      <Container>
        <Text>
            {`${startIndex}-${endIndex} sur ${pagination.pageLimit ?? "-"}`}
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