

const fruit = ["mango", "apple", "watermelon", "apple", "grape", "Apple"];

let fruitName = prompt("Enter fruit name");

let count = 0;



for (let i =0; i < fruit.length; i++) {
    
    if(fruit[i].toLowerCase() === fruitName.toLowerCase()){
        count++;
        
    }
}

console.log(count);


