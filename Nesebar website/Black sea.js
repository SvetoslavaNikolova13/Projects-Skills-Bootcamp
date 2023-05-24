
window.addEventListener('load', () =>{"all your code"}) 
//Get the first element of array button and array navbar-links

/*const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
 toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
 })*/


 function myFunction() {
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    if (navbarLinks.style.display == "block") {
        navbarLinks.style.display = "none";
    } else {
        navbarLinks.style.display = "block";
    }
  }
 
