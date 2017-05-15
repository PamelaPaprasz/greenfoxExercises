// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

var anagramChecker = function(str1,str2){
    var splitedStr1 = Array.from(str1);
    var splitedStr2 = Array.from(str2);
    splitedStr1.sort();
    splitedStr2.sort();
    
    var alphabeticNewString1 = splitedStr1.join();
    var alphabeticNewString2 = splitedStr2.join();
    
    if(alphabeticNewString1 === alphabeticNewString2){
        return true;
    } else{
        return false;
    }
}

console.log(anagramChecker('dadppas', 'papaadd'));