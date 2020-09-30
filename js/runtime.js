!(function () {
  // font load
  WebFont.load({
    google: {
      families: ["ZCOOL KuaiLe", "Josefin Sans"],
    },
  });
})();

function loading(i) {
    FakeLoader.open(document.getElementsByClassName('table')[0], {
        spinner: 'spinner' + i
    })

    setTimeout(function () {
        FakeLoader.stop()
    }, 1500)
}