// # Callbacks

// #### Greet Users
// * Create a function which will print greeting message
// * Create a function which will receives array of different users and greet each user.

function greetUsers() {
  console.log("Good Morning,");
}
function greetMessage(name) {
  console.log("Good morning," +" "+ name);
}

setTimeout(greetUsers, 1000); // Timeout with a delay
greetMessage("John");

// greetMessage("John") // print "Good Morning, John"

//greetUsers(["John","Peter","Mark"], greetMessage)

const users = ["John", "Peter", "Mark"];
users.map(greetMessage);//giving greetMessage as callback function.

// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"

