const Product = require('./model')
const { ObjectId } = require('mongodb');

const post = (req, res) => {
    const {name, price, stock, status} = req.body
    Product.create({name, price, stock, status})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const index = (req, res) => {
    const name = req.query.name;
    Product.find({name: {$regex: name, $options : 'i'}})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const detail = (req, res) => {
    const id = req.params;
    Product.findOne({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const update = (req, res) => {
    const id = req.params;
    const {name, price, stock, status} = req.body
    Product.findOneAndUpdate({_id: ObjectId(id)}, {name, price, stock, status})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const destroy = (req, res) => {
    const id = req.params;
    Product.findOneAndDelete({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

module.exports = {
    post,
    index,
    detail,
    update,
    destroy,
}