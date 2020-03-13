var SweetSelector = (function () {
    function show() {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].style.display = null
        }
    }

    function hide() {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].style.display = "none"
        }
    }

    function addClass(className) {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].classList.add(className);
        }
    }

    function removeClass(className) {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].classList.remove(className);
        }
    }

    function on(event, callback) {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].addEventListener(event, callback);
        }
    }

    function trigger(event) {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].dispatchEvent(new Event(event));
        }
    }

    function request(options) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function () {
            options.success(this.response)
        });
        oReq.addEventListener("error", options.fail)
        oReq.open(options.type, options.url)
        oReq.send();
    }

    var Constructor = function (selector) {
        if (selector === "window") {
            this.elems = [window];
        }
        else if (selector === "document") {
            this.elems = [document];
        }
        else {
            this.elems = document.querySelectorAll(selector)
        }
    }

    var instantiate = function (selector) {
        Constructor.prototype.show = show;
        Constructor.prototype.hide = hide;
        Constructor.prototype.addClass = addClass;
        Constructor.prototype.removeClass = removeClass;
        Constructor.prototype.trigger = trigger;
        Constructor.prototype.on = on;

        return new Constructor(selector)
    }

    instantiate.ajax = request;

    return instantiate
})();

var $ = SweetSelector;
