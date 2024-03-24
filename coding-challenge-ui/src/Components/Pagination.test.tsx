import Pagination from "./Pagination";
import React from "react";
import { render } from '@testing-library/react';

test("Pagination component renders", () => {
    expect(Pagination).toBeDefined();
});

test("Pagination component has a table", () => {
    render(<Pagination currentPage={1} totalPages={10} handlePageChange={() => { }} />);
    const table = document.querySelector("input");
    expect(table).toBeInTheDocument();
});

test("Starts on page 1", () => {
    render(<Pagination currentPage={1} totalPages={10} handlePageChange={() => {}} />);
    const input = document.querySelector("input");
    expect(input).toHaveValue("1");
});

test("Spans before and after current page", () => {
    render(<Pagination currentPage={5} totalPages={10} handlePageChange={() => {}} />);
    const spans = document.querySelectorAll("span");
    expect(spans[0]).toHaveTextContent("4");
    expect(spans[1]).toHaveTextContent("6");
});