const { Client } = require('pg');
const config = {
    user: "schenker",
    password: "vreni1980",
    host: "192.168.99.100",
    port: 5432,
    database: "flowers_data"
};

const dbClient = new Client(config);

dbClient.connect().then(() => {
    console.log('connected to the database')
}).catch(error => {
    console.log(error);
});


exports.getFlowers = async function () {
    const sql = 'select * from flowerstable';
    const result = await dbClient.query(sql);
    return result.rows;
}

exports.getFlowerById = async function (flowerid) {
    const sql = 'select * from flowerstable where flowerid=' + flowerid;
    const result = await dbClient.query(sql);
    if (result.rows.length == 0) {
        return undefined;
    }
    return result.rows[0];
}