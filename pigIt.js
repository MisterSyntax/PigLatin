/**
*@algo: split string into array
*    foreach cut the first letter append to end
*    Then append ay to end of the word
*    -Sum the strings together
*/

function pigIt(str){
  var wordArray = [];
  var pigString = "";
  var firstChar = "";
  wordArray = str.split(" ");
  wordArray.forEach(function(word){
    firstChar = word.charAt(0);
    word = word.slice(1) + firstChar + "ay ";
    pigString = pigString + word;
  });
  pigString = pigString.trim();
  return pigString;
}
