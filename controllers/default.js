const db = require("../db/queries");
module.exports = {
  get: async (req, res) => {
    const messages = (await db.getAllMsg()).reverse();
    res.render("index", { msg: messages });
  },
};
