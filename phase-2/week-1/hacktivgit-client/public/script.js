
var app = (function () {
    "use strict";
    var api = "http://localhost:3000/api/github";
    var activeClass = "text-white bg-blue-500";
    var inactiveClass = "text-blue-500";

    var converter = new showdown.Converter();
    var $body = null;
    var $userContainer = null;
    var $ownerContainer = null;
    var $reposContainer = null;
    var $readmeContainer = null;
    var $searchRepo = null;

    var repos = [];
    var ownersElemsDom = [];
    var reposDom = [];

    var cacheDom = function () {
        $body = $('body');
        $userContainer = $('#user');
        $ownerContainer = $('#owners');
        $reposContainer = $('#repos');
        $readmeContainer = $('#readme');
        $searchRepo = $('#search-repo');
    }

    var bindEvents = function () {
        $searchRepo.on('submit', function (e) {
            e.preventDefault();
            var inputs = $(this).serializeArray();
            var filteredRepos = filterRepo(repos, inputs[0].value);
            console.log(filteredRepos);
            $reposContainer.empty();
            buildReposDom(filteredRepos);
        })

        $body.on('click', '.logout', function (e) {
            e.preventDefault();
            localStorage.removeItem("access_token");
            $body.addClass("need-login");
        })
    }

    var buildOwnersDom = function () {
        var owners = ["starred", "axios", "expressjs", "jquery", "vuejs"];
        for (var i = 0; i < owners.length; i++) {
            ownersElemsDom.push(
                $(`<li></li>`)
                    .add(`<a class="text-blue-500" href="#">${owners[i]}</a>`)
                    .data('owner', owners[i])
                    .data('starred', owners[i] === "starred")
                    .on('click', function (e) {
                        e.preventDefault();
                        for (var i = 0; i < ownersElemsDom.length; i++) {
                            ownersElemsDom[i].attr("class", inactiveClass);
                        }
                        var $this = $(this);
                        $this.attr("class", activeClass);
                        $reposContainer.empty();
                        $reposContainer.text("Loading");

                        if ($this.data("starred")) {
                            loadStarred(function (data) {
                                $reposContainer.empty();
                                buildReposDom(data)
                            });
                        }
                        else {
                            loadRepos($(this).data('owner'), function (data) {
                                repos = data;
                                $reposContainer.empty();
                                buildReposDom(data)
                            });
                        }

                    })
            )
        }
        $ownerContainer.append(ownersElemsDom);
    }

    var buildReposDom = function (repos) {
        reposDom = [];
        for (var i = 0; i < repos.length; i++) {
            reposDom.push(
                $("<li></li>")
                    .add(
                        $(`<a href="#" class="text-blue-500">${repos[i].name}</a>`)
                            .data('owner', repos[i].owner.login)
                            .data('name', repos[i].name)
                    )
                    .on('click', function (e) {
                        e.preventDefault();
                        var $this = $(this);
                        for (var i = 0; i < reposDom.length; i++) {
                            reposDom[i].attr("class", inactiveClass);
                        }
                        $this.attr("class", activeClass);
                        $readmeContainer.empty();
                        $readmeContainer.text("Loading");
                        loadReadme($this.data('owner'), $this.data('name'), function (response) {
                            $readmeContainer.empty();
                            var html = converter.makeHtml(response);
                            $readmeContainer.append($(html))
                        });
                    })
            )

        }
        $reposContainer.append(reposDom);
    }


    var buildUserInfoDom = function (data) {
        $userContainer.empty();
        $userContainer.append($(`<div class="p-4"><a href="${data.url}" class="pr-4">${data.login}</a><a href="#" class="logout">Logout</a></div>`));
    }

    var request = function (type, url, success) {
        $.ajax({
            url: url,
            type: type,
            headers: {
                access_token: localStorage.getItem('access_token')
            },
            success: success,
            error: function (err, code, message) {
                console.log(err, code, message)
            }
        })
    }

    var filterRepo = function (repos, keyword) {
        var regex = new RegExp(keyword, 'i')
        return repos.filter((repo) => regex.test(repo.name))
    }

    var loadUserData = function (callback) {
        request('get', `${api}/currentUser`, callback)
    }

    var loadStarred = function (callback) {
        request('get', `${api}/starred`, callback);
    }

    var loadRepos = function (owner, callback) {
        request('get', `${api}/repos/author/${owner}`, callback);
    }

    var loadReadme = function (owner, repo, callback) {
        request('get', `${api}/repos/${owner}/${repo}/readme`, callback);
    }

    var checkAuth = function () {
        var urlParams = new URLSearchParams(window.location.search);
        var code = urlParams.get('code');
        if (code) {
            request('get', `${api}/oauth?code=${code}`, function (response) {
                localStorage.setItem("access_token", response);
                window.location.href = "/";
            })
        }
        else {
            if (localStorage.getItem("access_token")) {
                $body.removeClass('need-login');
                loadUserData(buildUserInfoDom);
            }
        }
    }

    var initialize = function () {
        cacheDom();
        bindEvents();
        buildOwnersDom();
        checkAuth();
    }

    return initialize();
})();
