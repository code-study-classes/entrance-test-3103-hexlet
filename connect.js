const { Pool } = require('pg');

const pool = new Pool({ 
    user: 'your_username', 
    host: 'your_host', 
    database: 'your_database', 
    password: 'your_password', 
    port: 'your_port', 
    max: 20, // Maximum number of clients in the pool 
    idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed 
}); 
 
// Now you can use the pool to execute queries 
pool.query('SELECT * FROM your_table', (err, result) => 
{ if (err) { console.error('Error executing query:', err); } 
else { console.log('Query result:', result.rows); } });
