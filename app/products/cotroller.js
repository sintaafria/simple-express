const connection = require('../../config/mysql');

const index = (req, res) => {
    connection.query({
        sql: 'SELECT * FROM product'
    }, _reponse(res));
}

const detail = (req, res) => {
    connection.query({
        sql: 'SELECT * FROM product WHERE id = ?',
        values: [req.params.id]
    }, _reponse(res));
}

const post = (req, res) => {
    const {user_id, name, price, stock, status} = req.body
    connection.query({
        sql: 'INSERT INTO product (user_id, name, price, stock, status) VALUES (?, ?, ?, ?, ?)',
        values: [user_id, name, price, stock, status]
    }, _reponse(res));
}

const update = (req, res) => {
    const {user_id, name, price, stock, status} = req.body
    connection.query({
        sql: 'UPDATE product SET user_id = ?, name = ?, price = ?, stock = ?, status = ? WHERE id = ?',
        values: [user_id, name, price, stock, status, req.params.id]
    }, _reponse(res));
}

const destroy = (req, res) => {
    connection.query({
        sql: 'DELETE FROM product WHERE id = ?',
        values: [req.params.id]
    }, _reponse(res));
}

const _reponse = (res) => {
    return (error, result) => {
        if (error) {
            res.send({
                status: 'failed',
                response: error
            });
        } else {
            res.send({
                status: 'success',
                response: result
            });
        }
    }
}

module.exports = {
    index, 
    detail,
    post,
    update,
    destroy
}