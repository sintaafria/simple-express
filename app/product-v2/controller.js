const {Product, User} = require('./model');

const index = async (req, res) => {
    try {
        const result = await Product.findAll({
            include: User
        });
        res.send(_success(result));
    } catch(e) {
        res.send(e)
    }
}

const detail = async (req, res) => {
    try {
        const result = await Product.findAll({
            where: {
                id: req.params.id
            },
            include: User
        });
        res.send(_success(result));
    } catch (err) {
        res.send(err);
    }
}

const post = async (req, res) => {
    const {userId, name, price, stock, status} = req.body;
    try {
        await Product.sync();
        const result = await Product.create({userId, name, price, stock, status});
        res.send(result);
    } catch(e) {
        res.send(e)
    }
}

const update = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send({
            "message": "Product Updated"
        });
    } catch (err) {
        res.send(err);
    }
}

const destroy = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send({
            "message": "Product Deleted"
        });
    } catch (err) {
        res.send(err);
    }
}

const viewUser = async (req, res) => {
    try {
        const result = await User.findAll();
        res.send(_success(result));
    } catch(e) {
        res.send(e)
    }
}

const detailUser = async (req, res) => {
    try {
        const result = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(_success(result));
    } catch (err) {
        res.send(err);
    }
}

const createUser = async (req, res) => {
    const {name, email, address} = req.body;
    try {
        await User.sync();
        const result = await User.create({name, email, address});
        res.send(result);
    } catch(e) {
        res.send(e)
    }
}

const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send({
            "message": "Product Updated"
        });
    } catch (err) {
        res.send(err);
    }
}

const destroyUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send({
            "message": "Product Deleted"
        });
    } catch (err) {
        res.send(err);
    }
}


const _success = (res) => {
    if (res.length !== 0) {
        return {
            status: 200,
            message: 'success to fetch data',
            data: res
        }
    }else{
        return {
            status: 404,
            message: 'data unavailable',
        }
    }
}

module.exports = {
    index,
    detail,
    post,
    update,
    destroy,
    viewUser,
    createUser,
    detailUser,
    updateUser,
    destroyUser
}