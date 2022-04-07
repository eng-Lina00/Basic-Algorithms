
    function Palindrome(word){


        for(var i = 0; i < word.length/2; i++){
            if(word[i] != word[word.length-i-1]){
              return false; 
            }
        }
        return true;
        }
        let word = prompt("Please enter The Word", "Harry Potter");
        console.log(Palindrome(word));
