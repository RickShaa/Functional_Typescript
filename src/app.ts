

const countFunctionCall = (fn:Function) => {
    let counter = 0;
    return (...args:number[]) =>{
        console.log("called " + ++counter);
        return fn(...args)
    }
}

const add = (x:number, y:number) => x+y;
const countAdd = countFunctionCall(add);

console.log(countAdd(2,3))
console.log(countAdd(2,3))
console.log(countAdd(2,3))


const addCurried = (x:number) => (y:number) => x+y;
console.log(addCurried(3)(5));


const map = (array:any[]) => (cb:(x:any) => any) => array.map(cb);
let array = [1,2,3,11,22,33];
const modify = map(array);
const squareRoot = (x:number) => Math.sqrt(x);
console.log(modify(squareRoot));