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
           sloganTopRow.style.paddingRight = '60px';
       }, 500);
     }




  ////Products
  var productsLeft = document.querySelectorAll('.productsLeft');
  var productsRight = document.querySelectorAll('.productsRight');
  var productsContainer = document.querySelector('.productsContainer');

  if (window.innerWidth > 790) {
   productsContainer.onmousemove = function () {
    setTimeout(function() {
      productsLeft.forEach((product, i) => {
        product.style.paddingRight = '0px';
      });
        productsRight.forEach((product, i) => {
          product.style.paddingLeft = '0px';
        });
    },0);
  };
  } else {
   productsLeft.forEach((product, i) => {
    product.style.paddingRight = '0px';
  });
    productsRight.forEach((product, i) => {
      product.style.paddingLeft = '0px';
    });
  }


  ////Reviews
  const scrollElements = document.querySelectorAll(".scrollLoad");

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

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
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
