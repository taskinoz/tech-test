import React, { useState } from "react";

import styled from "styled-components";
import { OrderProps } from "./Components/Order";
import Sales from "./Components/Sales";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #cccccc;
`;

const AppHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

const HeaderText = styled.h1`
  font-family: "Roboto", sans-serif;
`;

const Username = styled.span`
  font-family: "Roboto", sans-serif;
`;

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [sales, setSales] = useState<Array<OrderProps> | null>(null);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("asc");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  React.useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((results) => results.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/sales?limit=${limit}&page=${page}&sort=${sort}`)  
      .then((results) => results.json())
      .then((data) => {
        setSales(data.data);
        setPage(data.current_page);
        setTotalPages(data.total);
        setLoading(false);
      });
  }, [limit, sort, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  }

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
  }

  const salesProps = {
    sales,
    limit,
    page,
    totalPages,
    sort,
    handlePageChange,
    handleLimitChange,
    handleSortChange,
    loading,
  };

  return (
    <AppWrapper>
      <AppHeader>
        <HeaderText>Analytics Dashboard</HeaderText>
        <Username>Welcome, {user ? user.firstName : "Guest"}!</Username>
      </AppHeader>
      <Sales {...salesProps} />
    </AppWrapper>
  );
};

export default App;
