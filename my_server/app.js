const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3030;

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public/views');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Weather Assistant'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Weather Predictor'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.'
    });
});

app.listen(PORT,() =>{
    console.log(`server started on port ${PORT}`);
})

