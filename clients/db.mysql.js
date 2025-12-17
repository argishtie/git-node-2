import mysql from 'mysql2';
import fs from 'fs/promises';
import path from "path";

const caFilePath = path.resolve('./clients/certificates/ca.pem');

const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER, MYSQL_PORT } = process.env;

const dbConfig = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  port: MYSQL_PORT,
  // Aiven requires SSL connection using their CA certificate
  ssl: {
    // Read the CA certificate file content into the 'ca' property
    ca: await fs.readFile(caFilePath),
    // Reject connections that aren't authorized by this CA
    rejectUnauthorized: true
  }
};

const connection = mysql.createConnection(dbConfig);

export default connection.promise();
