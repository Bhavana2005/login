const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            Name: <input type="text" name="name"><br>
            Email: <input type="email" name="email"><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.redirect(`/welcome?name=${name}&email=${email}`);
});

app.get('/welcome', (req, res) => {
    const { name, email } = req.query;
    res.send(`
        <h1>Welcome to Online art gallery</h1>
        <p> ${name}</p>
      
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
