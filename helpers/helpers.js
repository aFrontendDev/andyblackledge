import React from 'react'; 

export const createMarkup = function(htmlString) {
  return {__html: htmlString};
}

export const themes = {
  themeA: 'theme-a',
  themeB: 'theme-b',
  themeC: 'theme-c',
  themeD: 'theme-d',
  themeE: 'theme-e',
  themeF: 'theme-f'
};

export const textColours = {
  Dark: ' text-color-dark ',
  Light: ' text-color-light ',
};