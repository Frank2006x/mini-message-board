const db=require("../db/queries")

module.exports = {
  get: (req, res) => {
    res.render("form");
  },
  post: async (req, res) => {
    const msgText = req.body.text;
    const msgUser = req.body.user;
    await db.addMsg(msgUser,msgText);   

    res.redirect("/");
  },
};
