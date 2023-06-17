
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let values = Object.values(obj);

let newArr = values.map(obj => {
  if (obj['type'] === 'fruit') {
   return obj['colors'].map(word => {
    return word[0].toUpperCase() + word.slice(1);
    });
  } else if (obj['type'] === 'vegetable') {
    return obj['size'].toUpperCase(); 
   }
});

console.log(newArr);