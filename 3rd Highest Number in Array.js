let x=[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
let highestNumber=0;
let index=0;
let newarray=[];
let max;
function highestNuminArr(x,max){

     max = Math.max.apply(null, x); 
     x.splice(x.indexOf(max), 1)
     return max;

}


for(let n=1 ; n<=3 ;n++){
    if(n===3){
        highestNumber= highestNuminArr(x,max);
        console.log(highestNumber);
    }
    else{
    highestNuminArr(x);
}
}


