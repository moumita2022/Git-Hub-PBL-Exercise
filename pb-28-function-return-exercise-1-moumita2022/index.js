//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  //write your code hereconst splitedText =str.split(" ")
  const splitedText =str.split(" ")
    let result =[]
    for(let i=0;i<splitedText.length;i++){
        /*result.push(splitedText[i].charAt(0).toUpperCase()+splitedText[i].slice(1))*/
        result.push(splitedText[i][0].toUpperCase()+splitedText[i].slice(1))
    }
    return result.join(" ") 
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  //write your code here 
  const splitedText = str.split(" ")
    let longestWord= splitedText[0];
    for(let i=0 ; i < splitedText.length ;i++){
        if(longestWord.length < splitedText[i].length){
longestWord = splitedText[i]
        }
    }
    return longestWord;
  
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  //write your code here 

    let longestWord= country_name[0];
    for(let i=0 ; i < country_name.length ; i++){
        if(longestWord.length < country_name[i].length){
longestWord = country_name[i]
        }
    }
    return longestWord;
}


console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
