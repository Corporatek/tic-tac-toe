'use strict'

window.onhashchange = function () {
  // render function is called every hash change.
  rend(window.location.hash)
}


const render = ( )=> {
  // first hide all divs
  let pages = document.querySelectorAll(".border");
  for(let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none'
  }

  switch(hash) {
    case "#sign-in":
      pages[0].style.display = 'block';
      break;
    case "#game":
      pages[1].style.display = 'block';
      break;
    case "#change-password":
      pages[2].style.display = 'block';
      break;
    default :
      pages[0].style.display = 'block';
  }
}
