const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const mc = require('./controllers/messages_controller')

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/api/messages', mc.create )
app.delete('/api/messages/:id', mc.delete);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);

app.listen(3000, () => {
    console.log('I am listening to you Port:' +3000)
})