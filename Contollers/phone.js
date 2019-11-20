const PhoneModel = require("../database/models/phone");

class Phone {
    index(req, res) {
        PhoneModel.find().then((err, posts) => {
            if (err) {
                res.send(err);
            }

            res.json(posts);
        });
    }

    create(req, res) {
        const post = new PhoneModel({
            phone: req.body.phone,
        });
        post.save().then(() => {
            res.json({ status: "ok" });
        });
    }

    delete(req, res) {
        PhoneModel.remove({
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
module.exports = Phone;
