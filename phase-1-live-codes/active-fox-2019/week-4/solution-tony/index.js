const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const { Customer, Account } = require('./models');

app.get('/customers', (req, res) => {
    Customer.findAll({
        order: [['fullName', 'ASC']]
    }).then(customers => {
        res.render('customers', { customers })
    })
})

app.get('/customers/register', (req, res) => {
    res.render('customerRegister');
})
app.post('/customers/register', (req, res) => {
    Customer.create(req.body)
        .then(() => res.redirect('/customers'))
        .catch(err => res.send(err.message));
})

app.get('/customers/:idCustomer/editProfile', (req, res) => {
    Customer.findByPk(req.params.idCustomer)
        .then(customer => res.render('customerEdit', { customer }))
        .catch(err => res.send(err.message));
})
app.post('/customers/:idCustomer/editProfile', (req, res) => {
    const { id, identityNumber, ...rest } = req.body;
    Customer.update(rest, {
        where: {
            id
        },
    }).then(() => res.redirect('/customers'))
        .catch(err => res.send(err.message));
})

app.get('/customers/:idcustomers/accounts', (req, res) => {
    Customer.findByPk(req.params.idcustomers, {
        include: ["Accounts"]
    }).then(customer => res.render('accounts', { customer }));
});

app.post('/customers/:idcustomers/accounts', (req, res) => {
    Account.create(req.body).then(() => {
        res.redirect('/customers/' + req.params.idcustomers + '/accounts');
    })
        .catch(err => res.send(err))
})

app.get('/customers/:idCustomer/accounts/:idAccount/transfer', (req, res) => {
    Customer.findByPk(req.params.idCustomer)
        .then(customer => {
            return Account.findAll({ include: ["Customer"] })
                .then(accounts => {
                    const customerAccount = accounts.filter(el => el.id == req.params.idAccount)
                    res.render('transfer', { customer, accounts, customerAccount: customerAccount[0] })
                })
        }).catch(err => res.send(err));
})

app.post('/customers/:idCustomer/accounts/:idAccount/transfer', (req, res) => {
    Account.findByPk(req.params.idAccount).then(account => {
        account.balance = account.balance - req.body.amount
        return account.save()
    })
        .then(() => {
            return Account.findByPk(req.body.to).then(account => {
                account.balance = Number(account.balance) + Number(req.body.amount)
                return account.save();
            })

        })
        .then(() => res.send('success'))
        .catch(err => res.send(err));
});





app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));