const init = () => {
  
  if (browser.storage.sync.get("tabindex")) { 
    const allEl = document.querySelectorAll("body *[tabindex]"); 

    allEl.forEach(el => {
      if(el.getAttribute('tabindex') > 0) {
        el.setAttribute('tabindex', 0);
      }
    });
  }

}

try {
  init();  
} catch (error) {
  console.error(`Access Tools error: ${error}`)
}
