
//testing apps.js
console.log("this");


//Excercise 1
var students = ["Rena","Ben","Russ","Chris"];


function lengths (myStudents) {
var arrayOfNumbers = [];
//console.log(students);
for (i = 0; i < students.length; i++) {
	//console.log(arrayOfNumbers = students[i].length)
	arrayOfNumbers.push(students[i].length);
	//take the index vallue 


}
	console.log(arrayOfNumbers);
	return arrayOfNumbers;

}
lengths(students)



//Excercise 2
function transmogrifier(x,y,z) {
	var transmogrified = Math.pow((x*y),z);
	return transmogrified;
}

transmogrifier(3,4,5)

//Excercise 3 
function toonify (accent, sentence) {
	var modifiedSentence;
	if (accent === 'daffy') {
		modifiedSentence = sentence.replace(/s/gi,"th");
	}
	else if('elmer') {
		modifiedSentence = sentence.replace(/r/gi,"w");
	}
	else {
		console.log('text')

		

	}
	return modifiedSentence;
}

toonify("daffy", "so you smell like sausage")

//Excercise 4

var finalRev = []

function wordReverse(aSentence) {
	finalRev = aSentence.split("").reverse().join("");
	console.log(finalRev);
	return finalRev;

}
	
wordReverse("Hello what is your name")

//Excercise 5
var finalReverse = []
var finalFinalReverse = []

function wordReverse(aSentence) {
	finalReverse = aSentence.split("").reverse().join("");
	console.log(finalReverse);
	finalFinalReverse = finalReverse.split(" ").reverse().join(" ");
	return finalFinalReverse;
}


wordReverse("Hello what is your name")


//Excercise 6
//**Referenced from: http://stackoverflow.com/questions/6521245/finding-longest-string-in-array/12548884#12548884 but dont understand this fully - please explain on Monday!
var students = ["Renaa","Ben","Russ","Chris"];


function longest (anArray){
	var long ='';
	var longestStudent = '';

for(var i=0; i < anArray.length; i++){
    	if(anArray[i].length > long){
        var long = anArray[i].length;
        longestStudent = anArray[i];
}
}

 return longestStudent;
 
}
console.log(longest(students));


function repMaster (input,function){
	function 

}


//Final Round





