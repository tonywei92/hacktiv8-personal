const axios = require('axios');
const server = "https://api.github.com";
const qs = require('qs');
const client = axios.create({
    baseURL: server
})

class Github {

    static currentUser(access_token) {
        return client.get('/user', {
            headers: {
                Authorization: "token " + access_token
            }
        });
    }

    static starred(access_token) {
        return client.get('/user/starred', {
            headers: {
                Authorization: "token " + access_token
            }
        })
    }

    static createRepo(access_token, name, priv) {
        if (priv === undefined) {
            priv = false;
        }
        return client.post('/user/repos', { name, private: priv }, {
            headers: {
                Authorization: "token " + access_token
            }
        })
    }

    static findRepoByUsername(access_token, username) {
        return client.get(`/users/${username}/repos`, {
            headers: {
                Authorization: "token " + access_token
            }
        });
    }

    static unstar(access_token, owner, repo) {
        return client.delete(`/user/starred/${owner}/${repo}`, {
            headers: {
                Authorization: "token " + access_token
            }
        })
    }

    static getReadme(access_token, owner, repo) {
        return client.get(`/repos/${owner}/${repo}/readme`, {
            headers: {
                Authorization: "token " + access_token
            }
        })
            .then(response => {
                return axios.get(response.data.download_url)
            });
    }

    static getAccessToken(code) {
        return axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
        })
            .then(response => {
                const parsed = qs.parse(response.data)
                return parsed.access_token
            })
    }
}

module.exports = Github;