const { Client } = require("pg");

const SQL = `
create table if not exists msg_table(
    user varchar(255),
    msg TEXT,
    dateOfPost date
    );


`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PGPORT,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
