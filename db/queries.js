const pool = require("./pool");

async function getAllMsg() {
  const { rows } = await pool.query("select * from msg_table");
  return rows;
}

async function addMsg(username, msg) {
  await pool.query(
    `insert into msg_table("user",msg,dateofpost) values($1,$2,current_date)`,
    [username, msg]
  );
}

async function getUser(username) {
  const { rows } = await pool.query(`select * from msg_table where "user"=$1`, [
    username,
  ]);
  return rows[0];
}

module.exports = { getAllMsg, addMsg, getUser };
