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






function outer() {
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}

const increment = outer();
increment();
increment();
increment();




for (var i=0; i<3; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}




function multiply(a,b=5){
    return a*b;
}
console.log(multiply(5));