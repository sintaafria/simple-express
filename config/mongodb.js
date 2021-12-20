const {MongoClient} = require('mongodb');

const url = 'mongodb://sinta:sinta123@localhost:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('konenksi ke mongodb berhasil');
    } catch(e) {
        console.log(e);
    }
})();

const db = client.db('latihan');

module.exports = db;