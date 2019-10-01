import FontFaceObserver from 'fontfaceobserver';

/* istanbul ignore next */
// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

/* istanbul ignore next */
// When Open Sans is loaded, add a font-family using Open Sans to the body
const registerOpenSans = () => openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

export { registerOpenSans };
