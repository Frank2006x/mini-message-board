const { Client } = require("pg");
require("dotenv").config();
const SQL = `
create table if not exists msg_table(
    "user" varchar(255),
    msg TEXT,
    datofpost date
    );


`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
