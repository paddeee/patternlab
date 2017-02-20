var scrollFilterBar = (function() {

  var docElem = document.documentElement;
  var main = document.querySelector('.main');
  var didScroll = false;
  var changeFilterBarOn = 114;

  function init() {
    window.addEventListener('scroll', function() {

      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 10);
      }
    }, false);
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeFilterBarOn) {
      main.classList.add('main--fixed');
    }
    else {
      main.classList.remove('main--fixed');
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();