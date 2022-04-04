///Print 1 - 135
let sum =0;
for(let i=0; i<135;i++){
    console.log(i+1);
}
///Print Odd Numbers 1 - 135
for (let i = 1; i < 135; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
///Sum of Printed Numbers
for(let i=0; i<135;i++){
    sum = i+sum;
    console.log("number is: " + i + " sum: " + sum);
}
///Print the elements of an array
let  x = [1,4,2,12,-3,-10,]
for(let i=0 ; i<x.length; i++){
    console.log(x[i]);
}
///Find Max
console.log(Math.max(...x));


///Get Average
  x = [1,4,2,12];
let total=0;
for(let i=0; i< x.length ;i++){
    total = total +x[i];
}
console.log( total/x.length);

///Eliminate the Negative
x = [2,-1,4,-3] 
for(let i=0; i<135;i++){
    if(x[i]<0){
        x[i]=0;
    }
}
console.log(x);
///Number to String
x = [1,-4,0,-1]
for(let i=0; i<135;i++){
    if(x[i]<0){
        x[i]='Turing';
    }
}
console.log(x);

