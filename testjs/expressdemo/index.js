const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const students =[]


app.get('/', (req, res)=>{
    res.send(`hello all!`)
})

app.get('/students', (req, res)=>{
    res.render('list', {students: students})
})

app.post('/students/add', (req, res)=>{
    let id = 1;
    if(students.length>0){
        id = students[students.length-1].id +1
    }
    students.push({
        id: id,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    })
    res.redirect('/students')
})

app.get('/students/add', (req, res)=>{
    res.render('add')
})

app.get('/students/:id/delete', (req, res)=>{
    for(let i = 0; i<students.length;i++){
        if(students[i].id === Number(req.params.id)){
            students.splice(i,1)
        }
    }
    res.redirect('/students')
})

app.get('/students/:nama', (req, res)=>{
    res.send(req.params)
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))





