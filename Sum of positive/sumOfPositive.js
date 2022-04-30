//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
    let positives = arr.filter(arr => arr > 0).reduce((acc,c) => acc+c,0)
    return positives
  }