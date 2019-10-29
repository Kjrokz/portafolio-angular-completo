
window.onscroll = function() {
  var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  /* console.log(scrollTop); */

  if(scrollTop > 60) {
    /* console.log("Hola"); */

    const el = document.querySelector('#header');
    el.style.background = 'rgb(234, 237, 244,0.91) none repeat scroll 0% 0%';
    el.style.transition = 'all 0.5s ease-in';
    el.style.boxShadow = '0px 0px 17px 0px';

  }else {

    const el = document.querySelector('#header');
    el.style.background = 'transparent';
    el.style.boxShadow = 'none';
  }
};
