const gunzip = require('gunzip-file')

const dir = './coding-challenge-api/data';
const file = 'orders.csv.gz';

gunzip(`${dir}/${file}`, `${dir}/orders.csv`, () => {
    console.log('File was decompressed');
});
    