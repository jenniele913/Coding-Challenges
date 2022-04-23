//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    const keepArr = arr.filter((e,index) => index % 2 === 0)
    return keepArr
}

