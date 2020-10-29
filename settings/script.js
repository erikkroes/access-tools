const button = document.querySelector('button');

button.addEventListener('click', (e) => {  
  let el = e.target;
  let state = el.getAttribute('aria-checked');
  let isState = (state === 'true');
  
  el.setAttribute('aria-checked', isState ? false : true);

  browser.storage.sync.set({
    [el.id]: isState ? true : false
  });
});

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#tabindex").setAttribute('aria-checked', result.tabindex ? true : false);
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get("tabindex");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
  