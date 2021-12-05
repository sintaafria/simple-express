const express = require('express'); 
const router = require('./routes');

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use((req, res, next) => {
    res.send({
        status: 'Error',
        massage: `Page ${req.originalUrl} is not found`
    })
});

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000/`);
});

