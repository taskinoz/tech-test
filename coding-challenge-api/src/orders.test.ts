import moment from 'moment';
import {getOrders} from './orders';

test('getOrders returns a formatted response', () => {
    const res = {
        json: jest.fn(),
    };
    getOrders({query: {limit: 10}}, res);
    expect(res.json).toHaveBeenCalled();
});

test('getOrders returns 10 orders', () => {
    const res = {
        json: jest.fn(),
    };
    getOrders({query:{}}, res);
    const ordersArr = res.json.mock.calls[0][0];
    expect(ordersArr.data[0]).toHaveProperty('id', '5');
});

test('getOrders returns 10 orders', () => {
    const res = {
        json: jest.fn(),
    };
    getOrders({query: {limit: 10}}, res);
    const ordersArr = res.json.mock.calls[0][0];
    expect(ordersArr.data.length).toBe(10);
});

test('getOrders returns 5 orders', () => {
    const res = {
        json: jest.fn(),
    };
    getOrders({query: {limit: 5}}, res);
    const ordersArr = res.json.mock.calls[0][0];
    expect(ordersArr.data.length).toBe(5);
});

test('getOrders returns 1 order', () => {
    const res = {
        json: jest.fn(),
    };
    getOrders({query: {limit: 1}}, res);
    const ordersArr = res.json.mock.calls[0][0];
    expect(ordersArr.data.length).toBe(1);
});

test('getOrders retturns 10 if limit is less than 1', () => {
    const res = {
        json: jest.fn(),
    };
    getOrders({query: {limit: 0}}, res);
    const ordersArr = res.json.mock.calls[0][0];
    expect(ordersArr.data.length).not.toBe(0);
});