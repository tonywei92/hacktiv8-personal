const Member = require('../models').Member
const Tag = require('../models').Tag

class MemberController {

  static all(req, res) {

    Member.findAll({include: Tag})
    .then(members => res.render('member/all', {members}))
    .catch(err => res.send(err))
  }

  static allGold(req, res) {

    Member.findAll({include: Tag, where: {type: membership}})
    .then(members => res.render('member/all', {members}))
    .catch(err => res.send(err))
  }

  static rawMembers(req, res) {
    Member.findAll()
    .then(members => res.send(members))
    .catch(err => res.send(err))

    // Member.findAll({include: Tag})
    // .then(members => res.render('member/all', {members}))
    // .catch(err => res.send(err))
  }

  static rawTags(req, res) {
    Tag.findAll()
    .then(tags => res.send(tags))
    .catch(err => res.send(err))
  }

  static addPage(req, res) {
    Tag.findAll()
    .then(tags => res.render('member/add', {tags}))
    .catch(err => res.send(err))
  }

  static add(req, res) {
    Member.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age
    })
    .then(member => res.redirect('/members/'))
    .catch(err => res.send(err))
  }

  static detail(req, res) {
    Member.findByPk(req.params.id, {include: Tag})
    .then(member => res.render('member/detail', {member}))
    .catch(err => res.send(err))
  }

  static addTag(req, res) {
    Tag.create({
      name: req.body.tagname,
      MemberId: req.params.id
    })
    .then(() => res.redirect(`/members/${req.params.id}`))
    .catch(err => res.send(err))
  }

  static addexp(req, res) {
    Member.findByPk(req.params.id)
    .then(member => {
      if(member.exp >= 5000) throw new Error('exp tidak dapat melebihi 5000')
      else return Member.update({
        exp: exp+500
      }, {where: {id: member.id}})
    })
    .then(() => res.redirect(`/${req.params.id}`))
    .catch(err => res.send(err))
  }

  static delete(req, res) {
    Member.findByPk(req.params.body)
    .then(member => {

      return Tag.destroy({where: {MemberId: member.id}})
    })
    .then(() => {
      return Member.destroy(req.params.id)
    })
    .then(() => res.redirect('/members'))
    .catch(err => res.send(err))
  }

  static upgrade(req, res) {
    Member.update({
      type: 'gold'
    }, {where: {id: req.params.id}})
    .then(() => res.redirect(`/members/${req.params.id}`))
    .catch(err => res.send(err))
  }
}

module.exports = MemberController