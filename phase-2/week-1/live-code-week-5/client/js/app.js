const $app = $("#app");
const $login = $("#login-form");
const $loginBtn = $("#login-button");
const $loginForm = $login.find("form");
const $logoutBtn = $("#logout-button");
const $register = $("#register-form");
const $registerBtn = $("#register-button");
const $registerForm = $register.find("form");
const $alert = $("#alert");
const $comic = $("#comic");
const $comicList = $comic.find("div.row");
const $comicUpdate = $comic.find("#comic-update");
const $randomUser = $("#random-user");

const baseUrl = "http://localhost:3000";
const comiclistTemplate =
  `<div class="col-4 mb-4">
    <div class="card text-center">
    <input class="comic-id" type="hidden">
      <img
        src="https://www.idwpublishing.com/wp-content/uploads/2018/10/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yNDAvNzQ0L29yaWdpbmFsL1NwaWRlcm1hbjAxX2N2ckEuanBn.jpeg"
        class="card-img-top">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">Author: <span></span></p>
        <button class="comic-edit-btn btn btn-primary">Edit</button>
      </div>
    </div>
  </div>`;

$logoutBtn.hide();
$register.hide();
$alert.hide();
$comic.hide();

function isLogin() {
  if (localStorage.getItem("access_token")) {
    $login.hide();
    $register.hide();
    $alert.hide();
    $comicUpdate.hide();
    $logoutBtn.show();
    $comic.show();
    fetchComic();
  }
  else {
    $comic.hide();
    $logoutBtn.hide();
    $login.show();
  }
}
isLogin();

$registerBtn.on("click", function () {
  $login.hide();
  $register.show();
});
$loginBtn.on("click", function () {
  $register.hide();
  $login.show();
});

// login
$loginForm.on("submit", function (e) {
  e.preventDefault();
  const email = $loginForm.find("#email").val()
  const password = $loginForm.find("#password").val()
  // console.log(email, password);
  $.ajax({
    url: `${baseUrl}/login`,
    type: "POST",
    data: {
      email, password
    }
  })
    .done(function (result) {
      for (const key in result) {
        if (result.hasOwnProperty(key)) {
          const value = result[key];
          localStorage.setItem(key, value);
        }
      }
      isLogin();
    })
    .fail(function (err) {
      console.error(err);
      $alert.show();
    });
});

// logout
$logoutBtn.on("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  isLogin();
});

// register
$registerForm.on("submit", function (e) {
  e.preventDefault();
  const name = $registerForm.find("#name").val();
  const email = $registerForm.find("#email").val();
  const password = $registerForm.find("#password").val();
  $.ajax({
    url: `${baseUrl}/register`,
    type: "POST",
    data: {
      name, email, password
    }
  })
    .done(function (result) {
      for (const key in result) {
        if (result.hasOwnProperty(key)) {
          const value = result[key];
          localStorage.setItem(key, value);
        }
      }
      isLogin();
    })
    .fail(function (err) {
      console.error(err);
      $alert.show();
    });
});

// fetch Data
function fetchComic() {
  const access_token = localStorage.getItem("access_token");
  $.ajax({
    url: `${baseUrl}/comics`,
    headers: {
      access_token
    }
  })
    .done(function (result) {
      appendComic(result)
    })
    .fail(function (err) {
      console.error(err);
    });
}

// append comic
function appendComic(comics) {
  $comicList.text("");
  comics.map(comic => {
    const comicItem = $(comiclistTemplate);
    comicItem.find(".comic-id").val(comic.id);
    comicItem.find("img").attr("src", comic.imageUrl);
    comicItem.find(".card-title").text(comic.title);
    comicItem.find(".card-text span").text(comic.author);
    $comicList.append(comicItem);
  })
}

// edit comic
$(document).on("click", ".comic-edit-btn", function () {
  const thisCard = $(this.parentNode.parentNode.parentNode)

  const id = thisCard.find(".comic-id").val();
  const title = thisCard.find(".card-title").text();
  const author = thisCard.find(".card-text span").text();
  const imageUrl = thisCard.find("img").attr("src");

  $comicUpdate.find("#comic-id-update").val(id);
  $comicUpdate.find("#title").val(title);
  $comicUpdate.find("#author").val(author);
  $comicUpdate.find("#imageUrl").val(imageUrl);

  $comic.find(".row").hide();
  $comicUpdate.show();
});

$comicUpdate.on("submit", function (e) {
  e.preventDefault();
  const id = $comicUpdate.find("#comic-id-update").val();
  const title = $comicUpdate.find("#title").val();
  const author = $comicUpdate.find("#author").val();
  const imageUrl = $comicUpdate.find("#imageUrl").val();

  $.ajax({
    url: `${baseUrl}/comics/${id}`,
    type: "PUT",
    headers: {
      access_token: localStorage.getItem("access_token")
    },
    data: {
      title,
      author,
      imageUrl
    }
  })
  .done(function (result) {
    console.log(result);
    $comicUpdate.hide();
    $comic.find(".row").show();
    fetchComic();
  })
  .fail(function (err) {
    console.error(err);
  });
});

// random user
$randomUser.on("click", function () {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function ({results}) {
      const user = results[0];
      $registerForm.find("#name").val(`${user.name.first} ${user.name.last}`);
      $registerForm.find("#email").val(user.email);
      $registerForm.find("#password").val(user.login.password);
    }
  });
})