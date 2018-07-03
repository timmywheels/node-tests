const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

// GET /users
// Give users name prop and age prop
app.get('/users', (req ,res) => {
    res.send([{
           name: 'Timothy',
           age: 27
       }, {
           name: 'Andrea',
           age: 25
    }])
});


app.listen(4000, () => {
    console.log(`Server is running on port 4000.`)
});
module.exports.app = app;