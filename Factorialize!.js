function factorialize(){
    let number = prompt("Please enter The Number", "Harry Potter");
    total = 1 ;
    if (Number(number)==0){
        return 1;
    }
    else {
    for(let i=1 ; i<=Number(number); i++){
        total =i* total ;

    }
    return total;
}

}


console.log(factorialize());