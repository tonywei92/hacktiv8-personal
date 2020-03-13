const newsList = function ($container, onItemClick) {

    newsDom = [];

    function colorHash(inputString) {
        var sum = 0;

        for (var i in inputString) {
            sum += inputString.charCodeAt(i);
        }

        r = ~~(('0.' + Math.sin(sum + 1).toString().substr(6)) * 256);
        g = ~~(('0.' + Math.sin(sum + 2).toString().substr(6)) * 256);
        b = ~~(('0.' + Math.sin(sum + 3).toString().substr(6)) * 256);

        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

        var hex = "#";

        hex += ("00" + r.toString(16)).substr(-2, 2).toUpperCase();
        hex += ("00" + g.toString(16)).substr(-2, 2).toUpperCase();
        hex += ("00" + b.toString(16)).substr(-2, 2).toUpperCase();

        return {
            r: r
            , g: g
            , b: b
            , rgb: rgb
            , hex: hex
        };
    }

    function createTextDom(title, source, color, date, href) {
        return `<li class="list-group-item">
                    <div class="row">
                        <div class="col-1">
                            <div class="dot" style="background-color: ${color};">
                            </div>
                        </div>
                        <div class="col-10">
                                <p class="text-secondary">${source}</p>
                                <h6 class="text-md">${title}</h6>
                                <p class="small text-muted">${date}</p>
                        </div>
                    </div>
                </li>
            `;
    }

    function onNewsClickHandler(e) {
        e.preventDefault();
        var $this = $(this);
        for (var i = 0; i < newsDom.length; i++) {
            newsDom[i].removeClass("active");
        }
        $(this).addClass("active");
        onItemClick($this.data('link'));
    }

    function createListNews(news) {
        newsDom = [];
        for (var i = 0; i < news.length; i++) {
            newsDom.push(
                $(createTextDom(news[i].title[0], news[i].source[0]._, colorHash().hex, news[i].pubDate[0], news[i].link[0]))
                    .data('link', news[i].link[0])
                    .on('click', onNewsClickHandler)
            )
        }
    }

    function fetchNews(param = "") {
        $.ajax({
            url: "http://localhost:3000/api/news?" + param,
            method: "get",
            success: function (data) {
                createListNews(data.rss.channel[0].item)
                attachToDom();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        })
    }

    function attachToDom() {
        console.log($container, newsDom)
        $container.empty();
        $container.append(newsDom);
    }

    return {
        fetchNews: fetchNews
    }
};

(function () {
    var $newsContainer = null;
    var $newsIframe = null;
    var $searchForm = null;
    var news = {};

    function cacheDom() {
        $newsContainer = $("#news");
        $newsIframe = $("#newsContent");
        $searchForm = $("#search-form");
    }

    function init() {
        news = newsList($newsContainer, function (link) {
            $newsIframe.attr("src", link);
            // $.get("https://cors-anywhere.herokuapp.com/" + link, function (html) {
            //     $newsIframe.attr("src", 'data:text/html;charset=utf-8,' + html);
            // })
        });
        news.fetchNews();
    }

    function bindEvents() {
        $searchForm.on("submit", function (e) {
            e.preventDefault();
            news.fetchNews($(this).serialize());
        })
    }

    cacheDom();
    init();
    bindEvents();
})();