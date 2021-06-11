const filters = {
  tabindex: {
    name: "No positive tabindex",
    desc: "Positive tabindex gets set to 0 instead.",
    func: function() {
      const allEl = document.querySelectorAll("body *[tabindex]");

      allEl.forEach(el => {
        if(el.getAttribute('tabindex') > 0) {
          el.setAttribute('tabindex', 0);
        }
      });
    }
  },
  'no-alt': {
    name: "Hide decorative images",
    desc: "Hide images that have an empty alt or no alt at all",
    func: function(){
      const allEl = document.querySelectorAll("body img:not[alt], body img[alt='']");

      allEl.forEach(el => {
        el.setAttribute('hidden', true);
      });
    }
  }
}
