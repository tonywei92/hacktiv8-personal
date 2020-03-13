$.fn.modal = function (options) {
    var settings = $.extend({
        onOk: function () {

        },
        onClose: function () {

        },
        onCancel: function () {

        }
    }, options);

    var $this = this;
    var $closeModalTrigger = $this.find('.close-modal');
    var $cancelModalTrigger = $this.find('.cancel-modal');
    var $okModalTrigger = $this.find('.ok-modal');

    $this.addClass('simple-modal');
    $closeModalTrigger.on('click', function (e) {
        $this.removeClass('modal-open');
        settings.onClose(e);
    });

    $cancelModalTrigger.on('click', function (e) {
        $this.removeClass('modal-open');
        settings.cancel(e);
    });

    $okModalTrigger.on('click', function (e) {
        $this.removeClass('modal-open');
        settings.onOk(e);
    });

    var open = function () {
        $this.addClass('modal-open');
    }

    var close = function () {
        $this.removeClass('modal-open');
    }

    return {
        open: open,
        close: close
    }
}