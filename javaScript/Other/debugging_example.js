let flattened = [[1,2], [3,4], [5,6]].reduce((accumulator, array) => {
    debugger;
    return accumulator.concat(array);
}, []); //Not only 0 you can also start the accumulator value w an empty array