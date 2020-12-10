
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
 let num1 = parseInt(prompt(`Enter A Postive Number`))
 let num2 = parseInt(prompt(`Enter Another Postive Number`)) 
 const multiplication = (num1, num2) => {  
  var counter = 1;
    let total = num1;
    while (counter<num2){
    total+=num1
    counter++
    }
    return(total)
9
}

const answer1 = multiplication(num1, num2)
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

vowelOrConsonant = () => {

var words = prompt("write something").toLowerCase().split(``); 

var vowels = [`a`,`e`,`i`,`o`,`u`]
var userVowels=[]
var userConson=[]
var spaces=[]

for(i=0; i<words.length; i++){
 let letter = words[i];
  if ((letter === (`a`)) || (letter === `e`) || (letter === `i`) || (letter === `o`) || (letter === `u`)){
   userVowels.unshift(letter);
}else if (letter === (` `)){
  spaces.push(letter);
}
else{userConson.unshift(letter)}
}

var question = prompt(`wanna see vowels 1st or constants`).toLowerCase()
  if (question === `vowels`) {
        alert(` your word was ${words}  and these are vowels ${userVowels}`)
        alert(` and these are your constantants ${userConson}`)
        }
        
  else if (question === `constants`){
        alert(` your word is ${words}these are constantants ${userConson}`)
        alert(` and these are vowels ${userVowels}`)      
 }
 return(`your word is ${words}these are constantants ${userConson}, and these are vowels ${userVowels}`)
}



const answer2 = vowelOrConsonant()

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
//guessTheNumber  = () => {
//  return
//}


restart = () => {
  if (confirm ("Would You Like To Start A New Game? Y or N")) {
    //Y
   game()
  } else{
   //N
   alert(`I Hoped You Enjoyed The Game`)
   return

  }
}


function game () {
 var gamecounters = {
      bot: Math.floor(Math.random() * 40)+10,
      lives: 4,
      lifeCounter: 3,
      name: ``,
      fail_numbers: []
 };

gamecounters.name = prompt('what is your name')
console.log(gamecounters)

  for (var i = 0; i < gamecounters.lives; i++) {
    //console.log("\n");
    alert(`You (${gamecounters.name}) currently have ${gamecounters.lifeCounter} lives`);
    let enter = parseInt(prompt("Guess a number 10-50"));
    let player1 = enter;
    if (gamecounters.lifeCounter == 0) {
      alert(`Game over ${gamecounters.name}, the number was ${gamecounters.bot}`);
      restart();
      break;
    }
    if (player1 == gamecounters.bot) {
      alert(`You won!!! ${gamecounters.name.toUpperCase()}`  );
      break;
    }
    if (player1 !== gamecounters.bot) {
       gamecounters.fail_numbers.push(enter);
       alert(`Woops! Sorry! ${gamecounters.name} That wasn't the number! Previous guesses were ${gamecounters.fail_numbers}`);
    } if (confirm ("Would You Like To Try Again Y or N")){
      //Y
      gamecounters.lifeCounter--;
      } else{
       //N
       alert(`You ${gamecounters.name}  Failed the number was ${gamecounters.bot}`);
       alert(`Thanks for playing ${gamecounters.name} !`);
       break;
      }
  }
  return(`Game over ${gamecounters.name}, the number was ${gamecounters.bot} and Failed the number were ${gamecounters.fail_numbers}`)
}

const answer3 = game()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3

//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {
  var sortField = prompt(`Insert title, author or libraryId for info`);
  var library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      libraryId: 1254
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryId: 4264
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryId: 3245
    }];

  let result = []

  if (sortField === 'title') {
    result = library.sort(function(a, b) { return a.title.length - b.title.length }).reverse()
  } else if (sortField === 'author') {
    result = library.sort(function(a, b) { return a.author.length - b.author.length }).reverse()
  } else if (sortField === 'libraryId') {
    result = library.sort(function(a, b) { return a.libraryId - b.libraryId }).reverse()
  }

  return result.map(function(book) {
    return book[sortField]
  })

}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
