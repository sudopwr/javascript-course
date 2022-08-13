const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
let blogs = []

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/blogs', (req, res) => {
    res.json(blogs)
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    fIndex = blogs.findIndex(blog => blog.id === id)
    res.json(blogs[fIndex])
});

app.post('/blogs', (req, res) => {
    const title = req.body.title
    const content = req.body.content

    const blog = {
        id: uuidv4(),
        title,
        content
    }

    blogs.push(blog)
    res.json(blog)
});

app.put('/blogs/:id', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const content = req.body.content

    fIndex = blogs.findIndex(blog => blog.id === id)
    blogs[fIndex].title = title
    blogs[fIndex].content = content

    res.json(blogs[fIndex])
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id
    blogs = blogs.filter(blog => blog.id !== id)
    res.json(blogs)
});

server.listen(3000, () => {
    console.log(`-----------------------\nServer started successfully!, Open this URL localhost:3000\n-----------------------`);
});
