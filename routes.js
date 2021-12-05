const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

router.post('/edit-profil', (req, res) => {
    res.json(req.body)
});

module.exports = router;