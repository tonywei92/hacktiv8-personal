const { Item, Member } = require('../models');

class ItemController {

    static index(req, res) {
        Item.findAll({
            include: [Item.Member]

        })
            .then(items => {
                res.render('pages/item/index', { items });
            })
            .catch(err => res.send(err));
    }

    static view(req, res) {
        Item.findByPk(req.params.id, { include: [Item.Log] })
            .then(item => {
                res.render('pages/item/view', { item });
            })
            .catch(err => res.send(err));
    }

    static add(req, res) {
        res.render('pages/item/add');
    }

    static rent(req, res) {
        const { id } = req.params;
        const promises = [Item.findByPk(id), Member.findAll()]
        Promise.all(promises)
            .then(values => {
                res.render('pages/item/rent', { item: values[0], members: values[1] });
            })
    }

    static return(req, res) {
        const { id } = req.params;
        Item.findByPk(id, { include: [Item.Member] })
            .then(item => {
                res.render('pages/item/return', { item })
            })
            .catch(err => {
                res.send(err);
            })

    }

    static create(req, res) {
        const { name, condition, pricePerDay } = req.body;
        Item.create({ name, condition, pricePerDay })
            .then(() => {
                console.log('ok')
                req.flash('success', 'success')
                res.redirect('/items')
            })
            .catch(err => {
                console.log(err)
                req.flash('error', err.message)
                res.redirect(`/items/add`)
            })
    }

    static destroy(req, res) {
        const { id } = req.params;
        Item.destroy({ where: { id }, individualHooks: true })
            .then(() => {
                req.flash('success', 'success')
                res.redirect('/items')
            })
            .catch(err => {
                req.flash('error', err.message);
                res.redirect('/items');
            })
    }

    static saveRent(req, res) {
        const { id } = req.params;
        const { memberId } = req.body;
        Item.update(
            { rentedBy: memberId, rentedOn: new Date() },
            { where: { id }, individualHooks: true })
            .then(() => {
                req.flash('success', 'success')
                res.redirect('/items')
            })
            .catch(err => {
                req.flash('error', err.message);
                res.redirect(`/items/${id}/rent`)
            })
    }

    static saveReturn(req, res) {
        const { id } = req.params;
        const { condition } = req.body;
        Item.update({ rentedBy: null, rentedOn: null, condition }, { where: { id }, individualHooks: true })
            .then(() => {
                req.flash('success', 'success')
                res.redirect(`/items`)
            })
            .catch(err => {
                req.flash('error', err.message);
                res.redirect(`/items/${id}/return`)
            })
    }
}

module.exports = ItemController;