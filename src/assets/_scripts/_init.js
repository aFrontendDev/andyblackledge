/**
* @file _init - initiate JS modules on page ready JavaScript
*/
function ready() {
  if (document.readyState != 'loading'){
    // Add init functions here to page ready
    example.init();
  } else {
    document.addEventListener('DOMContentLoaded');
  }
}

ready();