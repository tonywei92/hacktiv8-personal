console.log($("#eyed"))
console.log($(".fun-item"))
console.log($("a"))

setTimeout(function () {
    $("#eyed").hide();
    setTimeout(function () {
        $("#eyed").show();
    }, 500)
}, 500);


function removeClass(e) {
    e.preventDefault();
    $('.btn').removeClass('shadi');
}

function addClass(e) {
    e.preventDefault();
    $('.btn').addClass('shadi');
}

$('.btn').on('click', function () { console.log("awesome") });
$('.btn').trigger('click');
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts",
    type: "get",
    success: function (response) {
        console.log(response)
    },
    fail: function () {
        console.log("fail")
    }
})  