import Sales from "./Sales";
import React from "react";
import { render } from '@testing-library/react';

test("Sales component renders", () => {
    expect(Sales).toBeDefined();
});

test("Sales component has a table", () => {
    render(<Sales />);
    const table = document.querySelector("table");
    expect(table).toBeInTheDocument();
});

test ("Sales component has a table header", () => {
    render(<Sales />);
    const table = document.querySelector("thead");
    expect(table).toBeInTheDocument();
});

test("Sales component has a table body", () => {
    render(<Sales />);
    const table = document.querySelector("tbody");
    expect(table).toBeInTheDocument();
});

test("Sales component will render 10 rows", () => {
    const data = [
        {
            "id": "32",
            "marketplace": "🇦🇺🇸 Amazon",
            "store": "Shoes Plus",
            "order_id": "PMXDNMUGCF",
            "latest_ship_date": "2024-01-28T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Altoona UG, 87881",
            "items": 8,
            "order_value": 17.89
        },
        {
            "id": "35",
            "marketplace": "🇦🇺🇸 Catch",
            "store": "Sheetly",
            "order_id": "CIQPFBJFBI",
            "latest_ship_date": "2024-01-19T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Pittsfield BW, 76422",
            "items": 9,
            "order_value": 53.09
        },
        {
            "id": "38",
            "marketplace": "🇦🇺🇸 Amazon",
            "store": "Shoes Plus",
            "order_id": "IKFMTCVPQX",
            "latest_ship_date": "2024-02-24T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Sacramento US, 72728",
            "items": 7,
            "order_value": 90.93
        },
        {
            "id": "39",
            "marketplace": "🇬🇧🇷 Ebay",
            "store": "Snack Co.",
            "order_id": "RKFMPEKFDM",
            "latest_ship_date": "2024-03-04T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Burke GB, 41851",
            "items": 10,
            "order_value": 99.35
        },
        {
            "id": "40",
            "marketplace": "🇺🇸🇦 Amazon",
            "store": "Great Jeans",
            "order_id": "HIATIVAOJF",
            "latest_ship_date": "2024-01-26T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Joliet RE, 19962-4337",
            "items": 7,
            "order_value": 181.05
        },
        {
            "id": "43",
            "marketplace": "🇦🇺🇸 Catch",
            "store": "Sheetly",
            "order_id": "VDEBCTBNTV",
            "latest_ship_date": "2024-01-28T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Albany CL, 04146",
            "items": 5,
            "order_value": 28.29
        },
        {
            "id": "45",
            "marketplace": "🇦🇺🇸 Amazon",
            "store": "Shoes Plus",
            "order_id": "PSRYGNAOWM",
            "latest_ship_date": "2024-01-27T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Pocatello TN, 00134",
            "items": 7,
            "order_value": 42.13
        },
        {
            "id": "47",
            "marketplace": "🇦🇺🇸 Amazon",
            "store": "Shoes Plus",
            "order_id": "VXISFFFGWX",
            "latest_ship_date": "2024-02-21T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Cathedral City TR, 88170-6659",
            "items": 5,
            "order_value": 73.49
        },
        {
            "id": "50",
            "marketplace": "🇦🇺🇸 Amazon",
            "store": "Shoes Plus",
            "order_id": "MXOYAELDSQ",
            "latest_ship_date": "2024-02-03T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Springdale GL, 86992",
            "items": 10,
            "order_value": 73.21
        },
        {
            "id": "53",
            "marketplace": "🇺🇸🇦 Amazon",
            "store": "Great Jeans",
            "order_id": "SUKOPACTBW",
            "latest_ship_date": "2024-01-31T13:00:00.000Z",
            "shipment_status": "Pending",
            "destination": "Ocala EC, 74282",
            "items": 7,
            "order_value": 93.38
        },
    ];
    render(<Sales sales={data} />);
    const rows = document.querySelectorAll("tbody > tr");
    expect(rows.length).toBe(10);
});

test("Sales component will render a header", () => {
    render(<Sales />);
    const header = document.querySelector("thead");
    expect(header).toBeInTheDocument();
});