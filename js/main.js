document.addEventListener('DOMContentLoaded', function() {
    const servicesLink = document.querySelector('.services-link');
    const servicesList = document.querySelector('.service-list');

    servicesLink.addEventListener('mouseover', function(e) {
     
        servicesList.style.opacity = '1';
        /* servicesList.style.zIndex = '400000000'; */
        servicesList.style.display = 'flex';
  
    });
    servicesLink.addEventListener('mouseout', function(e) {
        servicesList.style.opacity = '0';
    });
    servicesList.addEventListener('mouseover', function(e) {
        servicesList.style.opacity = '1';
       /*  servicesList.style.zIndex = '400000000'; */
       servicesList.style.display = 'flex';
    });
    servicesList.addEventListener('mouseout', function(e) {
        servicesList.style.opacity = '0';
        servicesList.style.zIndex = '0';
        servicesList.style.display = 'none';
    });
   /*  const servicesLink2 = document.querySelector('.services-link2');
    const servicesList2 = document.querySelector('.services-list2');
   servicesLink2.addEventListener('click', function(e) {
    servicesList2.classList.toggle('active');
   }); */
    
    
});


var menu = document.getElementById('menu');
var close = document.getElementById('close');
var res= document.getElementById('res-menu');
menu.onclick= function(){
    res.style.height='100%  ';
}
close.onclick= function(){
    res.style.height='0px ';
}

$(window).on('load', function() {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
});