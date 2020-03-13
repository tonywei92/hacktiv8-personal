const router = require('express').Router()
const project = require('../controllers/projectController')
const auth = require('../middlewares/auth')

router.post('/', auth.authentication, project.create)
router.get('/', auth.authentication, project.getUserProject)
router.post(
  '/:projectId/invitemember',
  auth.authentication,
  auth.projectsOwner,
  project.inviteMember
)
router.post(
  '/:projectId/todo',
  auth.authentication,
  auth.projectMember,
  project.addTodo
)

router.get(
  '/:projectId/todo',
  auth.authentication,
  auth.projectMember,
  project.getTodo
)

router.get('/:projectId/allmember', project.getAllMember)

module.exports = router
