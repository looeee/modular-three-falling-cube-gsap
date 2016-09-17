const fadeLoader = () => {
  const loadingOverlay = document.querySelector('#loadingOverlay');

  loadingOverlay.style.opacity = 0;
  window.setTimeout(() => {
    loadingOverlay.classList.add('hide');
  }, 2000);
};

export const initLoader = () => {
  //if we are using the loadingManager, wait for it to finish before
  //fading out the loader
  if (modularTHREE.config.useLoadingManager) {
    modularTHREE.loadingManager.onLoad = () => {
      fadeLoader();
    };
  }
  //otherwise fade it out straightaway
  else {
    fadeLoader();
  }
};
