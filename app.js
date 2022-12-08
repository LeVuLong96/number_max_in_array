let arr = [2, 5, 68, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 100, 20, 21, 22, 23, 24, 25, 12, 0];

let max = arr[0]
for(let i =1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log(max)