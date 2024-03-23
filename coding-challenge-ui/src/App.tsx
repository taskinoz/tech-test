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

  React.useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((results) => results.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:8080/sales?limit=5")  
      .then((results) => results.json())
      .then((data) => {
        setSales(data);
      });
  }, []);

  return (
    <AppWrapper>
      <AppHeader>
        <HeaderText>Analytics Dashboard</HeaderText>
        <Username>Welcome, {user ? user.firstName : "Guest"}!</Username>
      </AppHeader>
      <Sales sales={sales} />
    </AppWrapper>
  );
};

export default App;
