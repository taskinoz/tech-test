import React from "react";

import { OrderProps } from "./Order";
import Order from "./Order";
import styled from "styled-components";
import Pagination from "./Pagination";

interface SalesProps {
    sales: Array<OrderProps> | null;
}

const SalesContainer = styled.div`
    margin: 5% 10%;
    background-color: white;
    /* overflow-x: scroll; */
    h1 {
        padding: 1rem;
        display: inline-block;
    }
    @media screen and (max-width: 1000px){
        margin: 5% 5%;
    }
    @media screen and (max-width: 768px){
        margin: 5% 2%;
    }
    @media screen and (max-width: 576px){
        margin: 5% 0%;
    }
`;

const SalesTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const OrderTitle = styled.thead`
    background-color: #f4f6fa;
    color: #b8bbc3;
    font-weight: bold;
    th {
        text-transform: uppercase;
        text-align: left;
        padding: 1rem;
    }
`;

const Sales = ({
    sales
}: SalesProps) => {

    return (
        <SalesContainer>
            <h1>Overdue Orders</h1>
            <SalesTable>
                <OrderTitle>
                    <tr>
                        <th>Marketplace</th>
                        <th>Store</th>
                        <th>Order Id</th>
                        <th>Order Value</th>
                        <th>Items</th>
                        <th>Destination</th>
                        <th>Days Oerdue</th>
                    </tr>
                </OrderTitle>
                <tbody>
                    {sales && sales.map((order) => (
                        <Order {...order} />
                    ))}
                </tbody>
            </SalesTable>
            <Pagination
                postsPerPage={5}
                totalPosts={sales?.length}
            />
        </SalesContainer>
    )
}

export default Sales;