
// storing data in LocalStorage
localStorage.setItem('theme', "dark");
localStorage.setItem('language', 'JavaScript');

// get the value or data from key
const themeName = localStorage.getItem('theme');
const langName = localStorage.getItem('language');
console.log(`The name of theme is ${themeName}`);
console.log(`The name of Language name is ${langName}`);
