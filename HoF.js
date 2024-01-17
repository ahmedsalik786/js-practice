// Higher order functiol: it is the function which accept another function as a parameter/ return a function

function getNum(number){  // first class function
    return number
}

function twiceNum(number){ // Higher order  function as it is returning a function
    return function(){
        return number*2;
    }
}

function sum(x,y){
    return x+y;
}

function mult(x,y){
    return x+y;
}

function calculate(operation,array){
        if(array.length==2){
            let a=array[0];
            let b=array[1];
            return operation(a,b)
        }
}

console.log(calculate(sum,[12,25]))