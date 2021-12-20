const { ObjectId } = require('mongodb');
const db = require('../../config/mongodb')

const index = (req, res) => {
    const name = req.query.name;
    db.collection('product').find({name: {$regex: name}}).toArray()
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const detail = (req, res) => {
    const id = req.params;
    db.collection('product').findOne({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const post = (req, res) => {
    const {name, price, stock, status} = req.body
    db.collection('product').insertOne({name, price, stock, status})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const update = (req, res) => {
    const {name, price, stock, status} = req.body
    const id = req.params;
    db.collection('product').findOneAndUpdate({_id: ObjectId(id)}, {$set:{name, price, stock, status}})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

const destroy = (req, res) => {
    const id = req.params;
    db.collection('product').deleteOne({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => res.send(error));
}

module.exports = {
    index,
    detail,
    post,
    update,
    destroy
}