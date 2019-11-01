const ProductModel = require("../database/models/product");

class Product {
    index(req, res) {
        ProductModel.find().then((err, posts) => {
            if (err) {
                res.send(err);
            }
            console.log(posts);
            res.json(posts);
        });
    }

    create(req, res) {
        console.log(req);
        const post = new ProductModel({
            img: req.body.img,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            subCategory: req.body.subCategory,
        });
        post.save().then(() => {
            res.json({ status: "ok" });
        });
    }

    read(req, res) {
        ProductModel.findOne({ _id: req.params, id }).then(post => {
            if (!post) {
                res.send({ error: "not found" });
            } else {
                res.json(post);
            }
        });
    }

    update(req, res) {
        ProductModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
            if (err) {
                res.send(err);
            }

            res.json({ status: "update" });
        });
    }

    delete(req, res) {
        ProductModel.remove({
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
module.exports = Product;
