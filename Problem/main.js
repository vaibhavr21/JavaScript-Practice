const ob = {
    name: 'John',
    greet: () => {
        console.log(this.name);
    }
};
ob.greet();   //output is null







const arr = [1,2,3];
const sum = arr.reduce((acc, curr)=> acc+curr,0);
console.log(sum)





console.log(NaN === NaN);

let name = 'John';
console.log(`Hello, ${name}!`);