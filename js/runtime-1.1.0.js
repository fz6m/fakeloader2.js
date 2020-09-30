!(function () {
  // font load
  WebFont.load({
    google: {
      families: ["ZCOOL KuaiLe", "Josefin Sans"],
    },
  });
})();

var _status = false

function loading(i) {
  if(_status) return

  _status = true
  FakeLoader.open(document.getElementsByClassName('table')[0], {
    spinner: 'spinner' + i
  })

  setTimeout(function () {
    FakeLoader.stop(function () {
      _status = false
    })
  }, 1500)
};