const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'nodejs',
    host: 'localhost',
    database: 'nodejs',
    password: 'nodejs',
    port: 5432,
});

module.exports = {
    execQuery: (text, params,callback) => {
        pool.connect()
            .then(client => {
                return client.query(text, params)
                    .then(res => {
                        client.release()
                        callback(null,res.rows);
                    })
                    .catch(e => {
                        client.release();
                        callback(e,null);
                    })
            })
    }
}