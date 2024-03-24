import Order from "./Order";
import React from 'react';
import { render } from '@testing-library/react';
import moment from "moment";

test("Order component renders", () => {
    expect(Order).toBeDefined();
});

test("Order component has a row", () => {
    const data = {
        id: "32",
        marketplace: "🇦🇺🇸 Amazon",
        store: "Shoes Plus",
        order_id: "PMXDNMUGCF",
        latest_ship_date: "2024-01-28T13:00:00.000Z",
        shipment_status: "Pending",
        destination: "Altoona UG, 87881",
        items: 8,
        order_value: 17.89
    };

    const { container } = render(<Order {...data} />);
    const rows = container.querySelectorAll("tr");
    expect(rows).toHaveLength(1);
});

test("Order component has 7 columns", () => {
    const data = {
        id: "32",
        marketplace: "🇦🇺🇸 Amazon",
        store: "Shoes Plus",
        order_id: "PMXDNMUGCF",
        latest_ship_date: "2024-01-28T13:00:00.000Z",
        shipment_status: "Pending",
        destination: "Altoona UG, 87881",
        items: 8,
        order_value: 17.89
    };

    const { container } = render(<Order {...data} />);
    const columns = container.querySelectorAll("td");
    expect(columns).toHaveLength(7);
});

test("Order component has correct data", () => {
    const data = {
        id: "32",
        marketplace: "🇦🇺🇸 Amazon",
        store: "Shoes Plus",
        order_id: "PMXDNMUGCF",
        shipment_status: "Pending",
        destination: "Altoona UG, 87881",
        items: 8,
        order_value: 17.89
    };

    const { container } = render(<Order {...data} />);
    const columns = container.querySelectorAll("td");
    expect(columns[0]).toHaveTextContent("🇦🇺🇸 Amazon");
    expect(columns[1]).toHaveTextContent("Shoes Plus");
    expect(columns[2]).toHaveTextContent("PMXDNMUGCF");
    expect(columns[3]).toHaveTextContent("$17.89");
    expect(columns[4]).toHaveTextContent("8");
    expect(columns[5]).toHaveTextContent("Altoona UG, 87881");
});