'use strict';

const connection = require('./db');

async function beforeActions() {
    const createProductsQuery = `create table if not exists products(
        id varchar(200) NOT NULL,
        name varchar(255) not null,
        type varchar(255) not null
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`;

    await connection.execute(createProductsQuery)
}

exports.list_all_product =  async function list_all_product(req, res) {
    try {
        await beforeActions()
        const [rows, fields]= await connection.execute("Select * from products");
        res.send(rows)
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}