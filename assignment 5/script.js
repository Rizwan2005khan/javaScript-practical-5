let array = [1, 2, 3, 4, 5];
let indexToRemoveFrom = array.indexOf(3);
if (indexToRemoveFrom !== -1) {
    array.splice(indexToRemoveFrom);
    console.log("New Array:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
} else {
    console.log("Element 3 not found in the array.");
}
