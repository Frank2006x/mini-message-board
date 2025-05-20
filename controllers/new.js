const messages = require("../messages");

module.exports = {
  get: (req, res) => {
    res.render("form");
  },
  post: (req, res) => {
    const msgText = req.body.text;
    const msgUser = req.body.user;
    console.log(msgText,msgUser)
    messages.push({
      text: msgText,
      user: msgUser,
      added: new Date(),
    });

    res.redirect("/");
  },
};
