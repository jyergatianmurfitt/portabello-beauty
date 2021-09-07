//////////////////////// Animations/////////////////////
function homeLoad(){
  ////Landing page
  var sloganTopRow = document.querySelector('.sloganTopRow');
  var sloganBottomRow = document.querySelector('.sloganBottomRow');
  var logo = document.querySelector('#logo');
  var background = document.querySelector('.section-1');

     setTimeout(function(){
         sloganTopRow.style.opacity = '1';
         logo.style.top = '0px';
         background.style.backgroundSize = '100%';
     }, 250);

     setTimeout(function(){
         sloganBottomRow.style.opacity = '1';
     }, 1000);

     if (window.innerWidth > 790) {
       setTimeout(function(){
           sloganBottomRow.style.paddingLeft = '30px';
           sloganTopRow.style.paddingRight = '30px';
       }, 500);
     } else if (window.innerWidth <= 790) {
       setTimeout(function(){
           sloganBottomRow.style.paddingLeft = '60px';
           sloganTopRow.style.paddingRight = '30px';
       }, 500);
     }



  ////Products & Reviews
  const scrollElements = document.querySelectorAll(".scrollLoad");
  const scrollProducts = document.querySelectorAll(".productsContainer");

  const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const displayScrollProducts = (element) => {
      window.addEventListener('scroll', function(e) {

        const target = document.querySelectorAll('.slide');

        var index = 0, length = target.length;
        for (index; index < length; index++) {
          if(window.innerWidth > 990) {
            var posX = window.pageYOffset * target[index].dataset.ratex;
          } else {
            var posX = window.pageYOffset * target[index].dataset.ratex / 4;
          }
          target[index].style.transform = 'translate3d('+posX+'px, 0px, 0px)';
        }
    });
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      }
    })
    scrollProducts.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollProducts(el);
      }
    })
  }

  setTimeout(function(){
    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    })
  }, 500);




  ////Footer
    var footer = document.querySelector('.footer');
    var contact = document.querySelector('.contact');
    var info = document.querySelector('.info');
    var social = document.querySelector('.socialList');

    if (window.innerWidth > 790) {
     footer.onmousemove = function () {
      setTimeout(function(){
          contact.style.opacity = '1';
          info.style.opacity = '1';
          social.style.opacity = '1';
      },0);
     };
    } else {
    contact.style.opacity = '1';
    info.style.opacity = '1';
    social.style.opacity = '1';
    }
  };




///////////////////////// Expand navbar/////////////////////
navBar = () => {
  var hamburger = document.querySelector('#hamburger');
  var orangePanel = document.querySelector('.navListContainer');
  var whitePanel = document.querySelector('.navItemList');
  var hiddenList = document.querySelector('.hiddenList');

  hamburger.addEventListener('click', e = () => {
    orangePanel.classList.toggle('show');
    whitePanel.classList.toggle('show');

    if (whitePanel.classList == "navItemList show") {
      hiddenList.style.display = 'block';
    } else {
      hiddenList.style.display = 'none';
    }

  });
};
navBar();
