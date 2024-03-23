import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { isFloat, isInt, isString } from '../lib/helpers';

const OrderRow = styled.tr`
    border-bottom: 1px solid #f4f6fa;
    td {
        padding: 1rem;
        font-weight: bold;
    }
`;

const OrderItem = styled.td<{ type?: any, status?: string }>`
    ${props => props.type && isInt(props.type) ? 'text-align: center;' : ''}
    ${props => props.type && isFloat(props.type) ? 'text-align: right;' : ''}
    ${props => props.type && isString(props.type) ? 'text-align: left;' : ''}
    ${props => props.status && props.status === 'Shipped' && 'color: green;'}
    ${props => props.status && props.status === 'Pending' && 'color: red;'}
`;

export interface OrderProps {
    id: string;
    marketplace: string;
    store: string;
    order_id: string;
    latest_ship_date: Object;
    shipment_status: string;
    destination: string;
    items: number;
    order_value: number;
}

const Order = (order: OrderProps) => {
    const {
        id,
        marketplace,
        store,
        order_id,
        latest_ship_date,
        shipment_status,
        destination,
        items,
        order_value
    } = order;
    return (
        <OrderRow>
            <OrderItem type={marketplace}>{marketplace}</OrderItem>
            <OrderItem type={store}>{store}</OrderItem>
            <OrderItem type={order_id}>{order_id}</OrderItem>
            <OrderItem type={order_value}>${order_value}</OrderItem>
            <OrderItem type={items}>{items}</OrderItem>
            <OrderItem type={destination}>{destination}</OrderItem>
            <OrderItem type={latest_ship_date} status={shipment_status}>{moment(latest_ship_date).fromNow(true)}</OrderItem>
        </OrderRow>
    )
}

export default Order;