/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const injectTwitterScript = () => {
  function addJS(jsCode) {
    var s = document.createElement(`script`)

    s.type = `text/javascript`
    s.async = `async`
    s.innerText = jsCode
    document.getElementsByTagName(`head`)[0].appendChild(s)
  }
  addJS(`
    window.twttr = (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://cdn.podia.com/embeds.js";
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
      return t;
    })(document, "script", "twitter-wjs");
  `)
}

let injectedTwitterScript = false

const embedClasses = [`.podia-button`].join(`,`)
exports.onRouteUpdate = () => {
  // If there's an embedded element, lazy-load the twitter script (if it hasn't
  // already been loaded), and then run the twitter load function.
  if (document.querySelector(embedClasses) !== null) {
    if (!injectedTwitterScript) {
      injectTwitterScript()
      injectedTwitterScript = true
    }

    if (
      typeof twttr !== `undefined` &&
      window.twttr.widgets &&
      typeof window.twttr.widgets.load === `function`
    ) {
      window.twttr.widgets.load()
    }
  }
}
