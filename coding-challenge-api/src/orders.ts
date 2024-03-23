import * as fs from 'node:fs';
import moment from 'moment';

interface Store {
    id: string;
    name: string;
    country: string;
    shop: string;
}

interface Order {
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

export function getOrders (req: any, res: any) {
    const storesData = (() => {
        try {
            return fs.readFileSync('./data/stores.csv', 'utf8');
        } catch (error) {
            return "";
        }
    })();

    if (!storesData) {
        res.status(404).json({ error: 'Stores not found' });
    }
    const stores = storesData.split('\n').slice(1).map((line: any): Store => {
        const store = line.split(',');
        return {
            id: store[0],
            name: store[1],
            country: store[2],
            shop: store[3]
        };
    });
  
    const orders = (() => {
        try {
            return fs.readFileSync('./data/orders.csv', 'utf8');
        } catch (error) {
            return "";
        }
    })();
    
    if (!orders) {
        res.status(404).json({ error: 'Orders not found' });
    }

    const { limit=10 } = req.query;
    const lines = orders.split('\n');
    const headers = lines[0].split(',');
    const requestLimit = limit >= 1 ? parseInt(limit) + 1: 11;
    const filtered = lines.filter((line: any) => line.includes('Pending'));
    const ordersData = filtered.slice(1, requestLimit).map((line: any): Order => {
        const order = line.split(/(?!\B"[^"]*),(?![^"]*"\B)/g);
        const store = stores.find((store: Store) => store.id === order[1]);
        return {
            id: order[0],
            marketplace: store ? `${emojiFlag(store.country)} ${store.name}` : '',
            store: store ? store.shop : '',
            order_id: order[2],
            latest_ship_date: moment(order[3], 'DD/MM/YYYY'),
            shipment_status: order[4],
            destination: order[5].replace(/"/g, ''),
            items: parseInt(order[6]),
            order_value: parseFloat(order[7]),
        }
    });

    res.json(ordersData);
}

export function emojiFlag (country: string) {
    const codePoints = country.toUpperCase().split('').map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}