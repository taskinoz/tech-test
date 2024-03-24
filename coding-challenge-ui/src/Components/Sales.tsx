import React from "react";

import { OrderProps } from "./Order";
import Order from "./Order";
import styled from "styled-components";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface SalesProps {
    sales: Array<OrderProps> | null;
    limit: number;
    page: number;
    totalPages: number;
    sort: string;
    handlePageChange: (newPage: number) => void;
    handleLimitChange: (newLimit: number) => void;
    handleSortChange: (newSort: string) => void;
    loading: boolean;
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

const Sort = styled.th`
    display: inline-block;
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;

const Loading = styled.tr`
    td {
        height: 100px;
        text-align: center;
    }
`;

const Sales = ({
    sales,
    limit,
    page,
    totalPages,
    sort,
    handlePageChange,
    handleLimitChange,
    handleSortChange,
    loading,
}: SalesProps) => {
    const changeSort = () => handleSortChange(sort === "asc" ? "desc" : "asc");
    const sortIcon = sort === "asc" ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />;

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
                        <Sort>Days Oerdue <button onClick={changeSort}>{sortIcon}</button></Sort>
                    </tr>
                </OrderTitle>
                <tbody>
                    {!loading && sales && sales.map((order) => (
                        <Order {...order} />
                    ))}
                    {loading && <Loading><td colSpan={7}>Loading...</td></Loading>}
                </tbody>
            </SalesTable>
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </SalesContainer>
    )
}

export default Sales;