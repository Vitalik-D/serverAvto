const BuyModel = require("../database/models/buy");

class Buy {
  index(req, res) {
    BuyModel.find().then((err, posts) => {
      if (err) {
        res.send(err);
      }

      res.json(posts);
    });
  }

  create(req, res) {
    const post = new BuyModel({
      list: req.body.list
    });
    post.save().then(() => {
      res.json({ status: "ok" });
    });
  }

  delete(req, res) {
    BuyModel.remove({
      _id: req.params.id
    }).then(post => {
      if (post) {
        res.json({ status: "deleted" });
      } else {
        res.json({ status: "error" });
      }
    });
  }
}
module.exports = Buy;
