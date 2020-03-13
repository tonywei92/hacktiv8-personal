const router = require('express').Router();
const GithubController = require('../controllers/GithubController');
const cors = require('cors');

router.use(cors())
router.use((req, res, next) => {
    req.access_token = req.headers.access_token;
    next();
})
router.get('/currentUser', GithubController.currentUser);
router.get('/starred', GithubController.starred);
router.post('/repos', GithubController.createRepo);
router.get('/repos/author/:username', GithubController.searchRepoByUsername);
router.get('/repos/:owner/:repo/readme', GithubController.getReadme);
router.get('/oauth', GithubController.getAccessToken)
router.delete('/unstar/:owner/:repo', GithubController.unstar);

module.exports = router;