// Put all the javascript code here, that you want to execute after page load.

const init = () => {
  const allEl = document.querySelectorAll("body *[tabindex]"); 

  allEl.forEach(el => {
    if(el.getAttribute('tabindex') > 0) {
      el.setAttribute('tabindex', 0);
    }
  });
}

try {
  init();  
} catch (error) {
  console.error(`Access Tools error: ${error}`)
}