// caching
var $container = $("#container");
var $tombolSaya = $(".tombolSaya");
var $formTest = $('#formTest');
var $name = $("#name");
var $age = $("#age");

// defined constants
var server = "http://localhost:3000"
var template = `<li>
                    <h4 class="name"></h4>
                    <p class="age"></p>
                </li>`

// methods
var fetchData = function(){
    $.ajax(`${server}/users`, {
        method:"GET",
        success: function(data){
            refreshList(data)
        }
    })
}

var addData = function(name, age){
    $.ajax(`${server}/users`, {
        method: "POST",
        data: {
            name: name,
            age: age
        },
        success:function(data){
            fetchData()
        }
    })
}

var refreshList = function(data){
    $container.empty();
    for(var i = 0; i<data.length;i++){
        var $item = $(template);
        $item.find(".name").text(data[i].name);
        $item.find(".age").text(data[i].age);
        $container.append($item);
    }
}

// binding events
$formTest.on('submit', function(e){
    e.preventDefault();
    addData($name.val(), $age.val())
})

$tombolSaya.on('click', function(){
    fetchData();
})


