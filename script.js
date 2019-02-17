// Makes the hamburger transition to a close X

document.addEventListener('DOMContentLoaded', function(){
  var checkbox = document.querySelector('#nav-toggle');
  var checkboxLabel = document.querySelector('#nav-toggle-label');
  
// removes the hamburger 
  function removeActive(){ 
    checkboxLabel.classList.remove('nav-toggle-label--active');
  }

// eventHandler x
  checkbox.onclick = function(){
    if (checkbox.checked){
      checkboxLabel.classList.add('nav-toggle-label--active');
    } else{
      removeActive();
    }
  };
  
  // initial position of the function 
  var menu = document.querySelector('.menu');
  menu.onclick = function(){
    removeActive();
    checkbox.checked = false;
  };
  
});