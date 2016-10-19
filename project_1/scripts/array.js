'use strict';
var cart = [];
var fruits=['apple','mango','orange'];
var animals=['dog','cat','monkey'];
            console.log(fruits[2]);
cart.push(fruits[1]);
console.log(cart[0]);
cart.pop();
cart.push(fruits[0]);
console.log(cart[0]);

function parseArray(arrayParam){
console.log('from function');
for(var i=0;i<arrayParam.length;i++){
    console.log(arrayParam[i])
}
}
parseArray(fruits);
parseArray(animals);

fruits.forEach(function(x){
  console.log(x);  
});