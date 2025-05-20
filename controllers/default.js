const messages=require('../messages')

module.exports = {
  get: (req, res) => {
    res.render("index", { msg: messages });
  },
};
