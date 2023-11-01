import mysql from 'mysql'

console.log("Base de datos conectada")

export const connection = mysql.createConnection({
  host: 'mysql-fomundifr.alwaysdata.net',
  user: 'fomundifr',
  password: 'Peteralveiro7',
  port: 3306,
  database: 'fomundifr_blog'
});