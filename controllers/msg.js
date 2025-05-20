const message = require("../messages");

module.exports = {
  get: (req, res) => {
    const id = parseInt(req.params.id);
    const msg_data = message[id];
    console.log(msg_data);
    if (!msg_data) return res.status(404).send("Message not found");
    res.render("msg", { msg: msg_data });
  },
};
