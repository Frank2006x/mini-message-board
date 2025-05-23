const db=require("../db/queries")

module.exports = {
  get: async(req, res) => {
    const username = (req.params.username);
    const msg_data = await db.getUser(username);
    console.log(msg_data);
    if (!msg_data) return res.status(404).send("Message not found");
    res.render("msg", { msg: msg_data });
  },
};
