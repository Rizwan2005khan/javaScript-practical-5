let array = [1, 2, 3, 4, 5];
console.log("Elements greater than the previous element:");
for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) { 
        console.log(array[i]);
    }
}
