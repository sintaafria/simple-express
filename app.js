require('./config/mongoose')
const express = require('express'); 
// const productRouter = require('./app/products/routes');
// const productRouterV2 = require('./app/product-v2/routes');
// const productRouterV3 = require('./app/product-v3/routes');
const productRouterV4 = require('./app/product-v4/routes');
const logger = require('morgan');
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express();
app.use(logger('dev'))
app.use(express.urlencoded({extended: true}))
app.use(cors());
// app.use('/api/v1', productRouter)
// app.use('/api/v2', productRouterV2)
// app.use('/api/v3', productRouterV3)
app.use('/api/v4', productRouterV4)
app.use((req, res, next) => {
    res.send({
        status: 'Error',
        massage: `Page ${req.originalUrl} is not found`
    })
});

app.listen(port, () => {
    console.log(`Server started on port `+port);
});

