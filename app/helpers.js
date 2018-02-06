import React from 'react'; 

export const createMarkup = function(htmlString) {
  return {__html: htmlString};
}
