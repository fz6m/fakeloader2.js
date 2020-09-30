const FakeLoader = {
  _el: null,

  _node: null,

  _status: false,

  _noClassNode: false,

  options: {
    bgColor: 'hsla(0, 100%, 100%, .8)',
    loadingColor: 'rgba(0,0,0,.4)',
    size: '50px',
    spinner: 'spinner4'
  },

  open: (el = document.getElementsByClassName('fake-loading')[0],
    config,
    callback) => {
    if (!el || FakeLoader._status) { return }

    if (!el.classList.contains('fake-loading')) {
      el.classList.add('fake-loading')
      FakeLoader._noClassNode = true
    }

    const options = Object.assign({}, FakeLoader.options, config)
    const node = document.createElement('div')
    node.className = 'fake-loader'

    const spinner = {
      spinner1: '<div class="fl fl-spinner spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
      spinner2: '<div class="fl fl-spinner spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
      spinner3: '<div class="fl fl-spinner spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
      spinner4: '<div class="fl fl-spinner spinner4"></div>',
      spinner5: '<div class="fl fl-spinner spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
      spinner6: '<div class="fl fl-spinner spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
      spinner7: '<div class="fl fl-spinner spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'
    }

    node.innerHTML = spinner[options.spinner]
    node.style.backgroundColor = options.bgColor
    node.style.setProperty('--color', options.loadingColor)
    node.style.setProperty('--size', options.size)

    el.appendChild(node)

    FakeLoader._el = el
    FakeLoader._node = node

    FakeLoader._status = true

    if (callback) callback(node)
  },

  stop: (callback) => {
    if(!FakeLoader._node) return
    FakeLoader._node.style.opacity = 0
    setTimeout(() => {
      FakeLoader._el.removeChild(FakeLoader._node)
      if(FakeLoader._noClassNode) {
        FakeLoader._el.classList.remove('fake-loading')
        FakeLoader._noClassNode = false
      }
      FakeLoader._el = null
      FakeLoader._node = null
      FakeLoader._status = false
      if (callback) callback()
    }, 300)
  }
}

export default FakeLoader