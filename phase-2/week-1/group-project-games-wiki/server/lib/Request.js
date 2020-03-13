const fetch = require('cross-fetch');
const URL = require('url').URL;
const createError = require('http-errors');

class Request {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    setDefaultParams(obj) {
        this.defaultParams = { ...obj };
    }

    setParser(parser) {
        this.parser = parser;
    }

    send(args, params) {
        let res = {}
        return fetch(this.createUrl(args, params))
            .then(response => {
                res = response;
                if (this.parser) {
                    return response.text()
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                if (res.status !== 200) {
                    throw createError(res.status, data)
                }
                else if (this.parser) {
                    return this.parser(data);
                }
                else {
                    return data;
                }
            })
    }

    createUrl(args, params) {
        const url = new URL(this.baseURL);
        url.pathname += `${args.filter(a => a).join('/')}`;
        for (let p in params) {
            if (params[p]) {
                url.searchParams.set(p, params[p]);
            }
        }
        if (this.defaultParams) {
            for (let p in this.defaultParams) {
                url.searchParams.set(p, this.defaultParams[p])
            }
        }
        return url.href;
    }
}

module.exports = Request;