const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mdAccess = require('./moduleAcess');

app.listen(3000, () => {
    console.log('listening at port 3000');

})

app.get('/', (req, res) => {
    res.status(200).send('database sample apllication');
})

app.get('/api/flowers', async (req, res) => {
    const flowers = await mdAccess.getFlowers();
    res.status(200).send(flowers);
});

app.get('/api/flowers/:id', async (req, res) => {
    const id = req.params.id;
    const result = await mdAccess.getFlowerById(id);
    if (result) {
        res.status(200).send(result);
        return;
    } else {
        res.sendStatus(404);
    }
})