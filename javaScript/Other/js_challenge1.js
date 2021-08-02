function cleanArr(arr) {
    let newArr = [];
    console.log(arr.sort())
    for (let i=0; i<arr.length; i++) {
        let temp = [];
        if (arr[i] === arr[i+1]) {
            temp.push(arr[i], arr[i+1]);
            newArr.push(temp);
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(cleanArr([1, 1, 2, 3, 1]));