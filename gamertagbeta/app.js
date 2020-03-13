const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const PORT = process.env.PORT || 3000;
const { Member, Tag } = require('./models');
const { getMemberColor, getTagColor } = require('./helpers/helpers');
app.locals.getMemberColor = getMemberColor;
app.locals.getTagColor = getTagColor;
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    Member.findAll()
        .then(members => {
            res.render('index', { memberCount: members.length });
        })
        .catch(err => res.send(err))
})

app.get('/raw/members', (req, res) => {
    Member.findAll()
        .then(members => res.send(members))
        .catch(err => res.send(err))
})

app.get('/raw/tags', (req, res) => {
    Tag.findAll()
        .then(tags => res.send(tags))
        .catch(err => res.send(err))
})

app.get('/members', (req, res) => {
    const data = {
        gold: false
    };
    if (req.query.gold) {
        data.gold = true;
    }
    if (data.gold) {
        Member.findGoldMembers()
            .then(members => {
                data.members = members
                res.render('members/index', data)
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }
    else {
        Member.findAll({ include: Tag })
            .then(members => {
                data.members = members
                res.render('members/index', data)
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

})

app.get('/members/add', (req, res) => {
    res.render('members/add')
})

app.post('/members/add', (req, res) => {
    const { firstName, lastName, age } = req.body;
    Member.create({
        firstName, lastName, age
    })
        .then(() => {
            res.redirect('/members');
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

app.get('/members/:id', (req, res) => {
    const { id } = req.params;
    Member.findByPk(id, { include: Tag })
        .then(member => {
            res.render('members/single', { member })
        })
        .catch(err => {
            res.send(err);
        })
})

app.post('/members/:id/createtag', (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    Tag.create({ name, MemberId: id })
        .then(() => {
            res.redirect('/members/' + id)
        })
        .catch(err => {
            console.log(err)
            res.send(err);
        })
})

app.get('/members/:id/upgrade', (req, res) => {
    const { id } = req.params;
    Member.update({ type: "gold" }, { where: { id } })
        .then(() => {
            res.redirect('/members/' + id)
        })
        .catch(err => {
            console.log(err)
            res.send(err);
        })
})

app.get('/members/:id/addexp', (req, res) => {
    const { id } = req.params;
    Member.findByPk(id)
        .then(member => {
            if (member.exp >= 5000) {
                throw new Error("max 5000 exp")
            }
            else {
                return Member.update({
                    exp: member.exp + 500
                }, { where: { id } })
            }
        })
        .then(() => {
            res.redirect('/members/' + id)
        })
        .catch(err => {
            res.send(err.message);
        })
})

app.get('/members/:id/delete', (req, res) => {
    const { id } = req.params;
    Member.destroy({ where: { id } })
        .then(() => {
            return Tag.destroy({ where: { MemberId: id } })
        })
        .then(() => {
            res.redirect('/members/')
        })
        .catch(err => {
            res.send(err.message);
        })
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`));