function fibonacciGenerator (n){
    if (n===0){
        output = []
    }
    else if ( n === 1) {
        output = [0]
    }
    else if (n === 2){
        output = [0,1]
    }
    else 
    output = [0,1]
    for (var i = 2; i < n; i ++){
        output.push (output[i -1 ]+output[i-2])
    }
    return output;
}

console.log(fibonacciGenerator(10));