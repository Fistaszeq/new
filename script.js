document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuToggle = document.getElementById('mobile-menu');
    var navbar = document.querySelector('.navbar');
  
    mobileMenuToggle.addEventListener('click', function () {
      navbar.classList.toggle('show');
    });
  });
  
function dark()
{
  body = document.getElementById("container");

  body.style.backgroundColor = 'black';
  body.style.color = 'white';


  text = document.getElementById("text");

  text.style.backgroundColor = 'black';
  text.style.color = "white";
}