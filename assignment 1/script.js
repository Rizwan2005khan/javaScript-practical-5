let array = [1, 2, 3, 4, 5];
array.splice(0, 2);
array.push(6, 7, 8);
console.log("New Array:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
