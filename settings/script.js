const buttons = document.querySelectorAll('button');
const filters = ['tabindex', 'no-alt'];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {  
    const el = e.target;
    const state = el.getAttribute('aria-checked');
    const isState = (state === 'true');
    
    el.setAttribute('aria-checked', isState ? false : true);
  
    browser.storage.sync.set({
      [el.id]: isState ? false : true
    });
  });
}

function restoreOptions() {
    filters.forEach(filter => {
      let getting = browser.storage.sync.get(filter);
      getting.then(setCurrentChoice, onError);

      function setCurrentChoice(result) {
        document.querySelector("#"+filter).setAttribute('aria-checked', result[filter] ? true : false);
        console.log("set " + filter + ": " + document.querySelector("#"+filter).getAttribute('aria-checked'));
      }
  
      function onError(error) {
          console.log(`Error: ${error}`);
      }    
    }) 
}

document.addEventListener("DOMContentLoaded", restoreOptions);
  