
///Addition
let add=0;
for( let i= 200 ;i<=2700;i++){
    if(i % 3 ===0 || i % 5===0){
        add=i+add;
    }
}
console.log(add);

///Shift the Values
x=[2,1,6,4,-7];

console.log(x.reverse());

///FizzBuzz
let fizzBuzz=[]
for(let i= 1 ; i<135 ;i++){
    if(i%3==0 & i%5==0){
         fizzBuzz.push( 'FizzBuzz');
    }
    else if (i% 5==0){
        fizzBuzz.push('Buzz');
    }
    else  if (i% 3==0){
        fizzBuzz.push('Fizz');
    }
    else{
        fizzBuzz.push(i);
    }

}
console.log(fizzBuzz);
///Fibonacci

let a,b,result;
a=0;
b=1;
result=b;
for(let i=0;i<=1000000;i++){
    if(i==0){
        console.log(i);
    }
    else if (a > 1000000) {
        break;
        
    }
    console.log(result)
    result=a+b;
    a=b;
    b=result;
}
///Remove the Negative

x=[1,-2,4,1];
for(i=0;i<x.length;i++){
    if(x[i]<0){
        x.splice(i,1);
    }
}
console.log(x);
///Communist Censorship
let lastindex ="";
x = ['Man', 'I','Love','The','Matrix','Program'];
console.log(x);
for (i=0;i<x.length;i++) {
  if (x[i]=='Program'){
      for (let y = 0; y < x[i].length; y++) {
        lastindex=lastindex+"*"
      }
      x.splice(i,i);
     x.push(lastindex);
  }
}
console.log(x);
