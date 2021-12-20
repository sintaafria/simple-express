const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sintaafria:santika11@latihan.wbcs8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('server database terhubung'))