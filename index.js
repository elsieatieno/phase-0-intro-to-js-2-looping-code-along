// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);*/

const names = ["Guadalupe", "Ollie", "Aki"];

const namesCards =[...names, "surprise"];



function writeCards(names){
  const newArray = []
  for (let i = 0; i < names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    newArray.push(message)
    
  }
  return newArray;
}
console.log(writeCards(names));

function countDown(){
  let countDown = 0;
  while(countDown < 11){
    console.log(countDown ++);
  }
}