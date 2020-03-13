const { Member } = require('../models');

class MemberControler {

    static index(req, res) {
        Member.findAll()
            .then((members) => {
                res.render('pages/member/index', { members })
            })
            .catch(err => res.send(err))
    }

    static add(req, res) {
        res.render('pages/member/add');
    }

    static edit(req, res) {
        const { id } = req.params;
        Member.findByPk(id)
            .then(member => {
                res.render('pages/member/edit', { member })
            })
            .catch(err => res.send(err));
    }

    static create(req, res) {
        const { nik, firstName, lastName, address, phone } = req.body;
        Member.create({ nik, firstName, lastName, address, phone })
            .then(() => {
                req.flash('success', 'success')
                res.redirect('/members')
            })
            .catch(err => {
                req.flash('error', err.message)
                res.redirect('/members/add')
            });
    }

    static update(req, res) {
        const { id } = req.params;
        const { nik, firstName, lastName, address, phone } = req.body;
        Member.update({ nik, firstName, lastName, address, phone }, { where: { id } })
            .then(() => {
                req.flash('success', 'success')
                res.redirect('/members')
            })
            .catch(err => {
                req.flash('error', err.message)
                res.redirect(`/members/${id}/add`)
            });
    }

    static destroy(req, res) {
        const { id } = req.params;
        Member.destroy({ where: { id } })
            .then(() => {
                req.flash('success', 'success')
                res.redirect('/members')
            })
            .catch(err => {
                req.flash('error', err.message)
                res.redirect(`/members`)
            });
    }

}

module.exports = MemberControler;