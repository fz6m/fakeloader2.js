!(function () {
  // font load
  WebFont.load({
    google: {
      families: ["ZCOOL KuaiLe", "Josefin Sans"],
    },
  });
})();

var status = false

function loading(i) {
    if(status) return

    status = true
    FakeLoader.open(document.getElementsByClassName('table')[0], {
        spinner: 'spinner' + i
    })

    setTimeout(function () {
        FakeLoader.stop(function() {
          status = false
        })
    }, 1500)
}