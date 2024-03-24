import { faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import _ from 'lodash';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (newPage: number) => void;
}

const PaginationContainer = styled.nav<{ page?: number }>`
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 1rem;
    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        margin: 0 0.5rem;
    }
    input {
        padding: 0.25rem;
        text-align: center;
        width: ${props => props.page ? props.page.toString().length+1: '2'}ch;
    }
    span {
        padding: 0.5rem;
    }
`;

const Pagination = ({
    currentPage,
    totalPages,
    handlePageChange,
}: PaginationProps) => {

    const updatePage = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            handlePageChange(newPage);
        }
    }

    return (
        <PaginationContainer page={currentPage}>
            {currentPage > 1 && <button onClick={() => updatePage(1)}><FontAwesomeIcon icon={faAnglesLeft} /></button>}
            {currentPage > 1 && <button onClick={() => updatePage(currentPage - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>}
            {currentPage > 1 && <span>{currentPage - 1}</span>}
            <div>Page <input type="text" value={currentPage} disabled /></div>
            {currentPage < totalPages && <span>{currentPage + 1}</span>}
            {currentPage < totalPages && <button onClick={() => updatePage(currentPage + 1)}><FontAwesomeIcon icon={faChevronRight} /></button>}
            {currentPage < totalPages && <button onClick={() => updatePage(totalPages)}><FontAwesomeIcon icon={faAnglesRight} /></button>}
        </PaginationContainer>
    );
}

export default Pagination;