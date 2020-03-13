function test(cb) {}

test(function(err) {
  if (err) {
    view.showError(err);
  } else {
    View.showMessage("success");
  }
});
