const express = require('express');
const app = express();

app.set('view', path.join(__dirname, 'views'));

app.set('view enginge', 'ejs');

//le digo a express que use esto cuando se lo pido
app.use(express.static('public'))

app.get('/user/:id/:username', (req, res) => {
    let userId = req.params.id;
    let user = req.params.username;
   res.render('index.ejs', {id: userId, username: user}); 
});


app.listen(3000, () => {
    console.log('server started at port 3000')
})