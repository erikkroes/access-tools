const init = () => {
  Object.entries(filters).forEach(([key, value]) => {   
    browser.storage.sync.get(key).then(settings => {
      if (settings[key] == true) {
        value.func();
      }
    });
  });
}

try {
  init();  
} catch (error) {
  console.error(`Access Tools error: ${error}`)
}
