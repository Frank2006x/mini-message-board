
const db=require("../db/queries")
module.exports = {
  get: async (req, res) => {
    const messages=await db.getAllMsg();
    res.render("index", { msg: messages });
  },
};
