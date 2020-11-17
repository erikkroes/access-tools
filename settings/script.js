function init() {
    Object.entries(filters).forEach(([filter, value]) => {
      let getting = browser.storage.sync.get(filter);
      getting.then(addFilter, onError);

      function addFilter(result) {
        // add the HTML to the settings page
        const list = document.querySelector('.filters__list');
        const output = `<li class="filter">
        <label for="${filter}" class="filter__label"> 
          <h3 class="filter__title">${value.name}</h3>
          <button type="button" id="${filter}" role="switch" aria-checked="${result[filter] ? "true" : "false"}">
            <span>on</span><span>off</span>  
          </button>
        </label>
        <p>${value.desc}</p>
      </li>`;      
        list.insertAdjacentHTML("beforeend", output);

        // Set up the switch on the settings page
        const button = document.querySelector("#"+filter);              
        button.addEventListener('click', (e) => {  
          const el = e.target;
          const state = el.getAttribute('aria-checked');
          const isState = (state === 'true');
          
          el.setAttribute('aria-checked', isState ? false : true);
          
          browser.storage.sync.set({
            [el.id]: isState ? false : true
          });
        });        
      }
  
      function onError(error) {
          console.log(`Error: ${error}`);
      }    
    }) 
}

document.addEventListener("DOMContentLoaded", init);
  