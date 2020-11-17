const init = () => {
  console.log("Getting settings");

  browser.storage.sync.get("tabindex").then(filterTabindex);
  browser.storage.sync.get("no-alt").then(filterNoAlt);
}

try {
  init();  
} catch (error) {
  console.error(`Access Tools error: ${error}`)
}

function filterTabindex(state) {
  console.log(state);
  if (state.tabindex == true) { 
    console.log("tabindex set to " + state.tabindex);
    const allEl = document.querySelectorAll("body *[tabindex]"); 

    allEl.forEach(el => {
      if(el.getAttribute('tabindex') > 0) {
        el.setAttribute('tabindex', 0);
      }
    });
    console.log("tabindex ran!");
  }
}

function filterNoAlt(state) {
  if (state.noalt == true) { 
    const allEl = document.querySelectorAll("body img:not[alt], body img[alt='']"); 

    allEl.forEach(el => {
      el.setAttribute('hidden', true);
    });
  }  
}
