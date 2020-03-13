const Github = require('../Models/Github');

class GithubController {

    static currentUser(req, res, next) {
        Github.currentUser(req.access_token)
            .then(response => {
                res.json(response.data)
            })
            .catch(next);
    }

    static starred(req, res, next) {
        const { q } = req.query;
        Github.starred(req.access_token)
            .then(response => {
                if (q) {
                    res.json(response.data.filter(item => {
                        return item.name.includes(q) ||
                            item.owner.login.includes(q) ||
                            item.full_name.includes(q);
                    }))
                }
                else {
                    res.json(response.data)
                }
            })
            .catch(next)
    }

    static createRepo(req, res, next) {
        const { name, private: priv } = req.body;
        Github.createRepo(req.access_token, name, priv)
            .then(response => {
                res.status(201).json(response.data)
            })
            .catch(next)
    }

    static searchRepoByUsername(req, res, next) {
        const { username } = req.params;
        Github.findRepoByUsername(req.access_token, username)
            .then(response => {
                res.json(response.data)
            })
            .catch(next)
    }

    static unstar(req, res, next) {
        const { owner, repo } = req.params;
        Github.unstar(req.access_token, owner, repo)
            .then(response => {
                res.json({ message: `${repo} unstarred` })
            })
            .catch(next)
    }

    static getReadme(req, res, next) {
        const { owner, repo } = req.params;
        Github.getReadme(req.access_token, owner, repo)
            .then(response => {
                res.json(response.data)
            })
            .catch(next)
    }

    static getAccessToken(req, res, next) {
        const { code } = req.query;
        Github.getAccessToken(code)
            .then(accessToken => {
                res.json(accessToken)
            })
            .catch(next)
    }
}

module.exports = GithubController;