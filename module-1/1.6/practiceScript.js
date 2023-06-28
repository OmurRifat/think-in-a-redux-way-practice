let arr = [1, 2, 3, null, '', false, 4, undefined, 5]

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
        if (typeof arr[i] !== "number") {
            arr[i] = arr[j + 1];
            // if (typeof arr[i] !== "number") { // if the next element is not a number, then skip it}
            // }
        }
    }
}

console.log(arr[10])