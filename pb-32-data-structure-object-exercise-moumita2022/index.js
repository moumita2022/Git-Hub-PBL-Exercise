//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const recipe = {
    tittle:"Sheekh kabab",
    servings: 5,
    ingredients:[
        "chicken",
        "onion",
        "egg",
        "salt",
        "corianderLeaves",
        "mintLeaves",
        "greenChillies"]

    ,
};
console.log(recipe);


//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.



//write your code here
const books = [{
    tittle:"Cook Book",
    author: "Moumita Chakraborty",
    alreadyRead:true
},
{
    tittle:"Cook Book2",
    author: "Moumita Chakraborty",
    alreadyRead:false
}]

for(const book of books){
    if(book.alreadyRead){
        console.log(`You have already read ${book.tittle} by ${book.author}.`);
    }else{
        console.log(`You need to read ${book.tittle} by ${book.author}.`);
    }
}