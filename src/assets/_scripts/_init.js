/**
* @file _init - initiate JS modules on page ready JavaScript
*/
function ready() {
  if (document.readyState != 'loading'){
    // Add init functions here to page ready
    menu.init();
  } else {
    document.addEventListener('DOMContentLoaded', false);
  }
}

ready();