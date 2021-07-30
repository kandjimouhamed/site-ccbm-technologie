var buttun = document.querySelector('.nav-icons');
var menu = document.querySelector('.topbar-nav');
var baniere = document.querySelector('.baniere');
var activatedClass ='humburger_activated';
var baniere_activated = 'activer_baniere';
buttun.addEventListener('click' ,function (e) {
    e.preventDefault();
    this.parentNode.classList.toggle(activatedClass);
    // console.log(this.parentNode);

});
// baniere.addEventListener('click' ,function (e) {
//     e.preventDefault();
//     this.parentNode.classList.remove(activatedClas);
    

// });

// buttun.addEventListener('click' ,function () {
    
//      menu.classList.add('activatedClass');
    

//  });