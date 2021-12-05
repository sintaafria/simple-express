const express = require('express'); 
const router = require('./routes');
const port = process.env.PORT || 3000

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use((req, res, next) => {
    res.send({
        status: 'Error',
        massage: `Page ${req.originalUrl} is not found`
    })
});

app.listen(port, () => {
    console.log(`Server started on port`+port);
});

