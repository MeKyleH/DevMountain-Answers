var arr = [1,2,3,];

//create a function named 'last' that returns the last object from a given array
//HINT: try to make it so that no matter the size of the array, your function will still return the correct value. For example, if the array looked like [1,2,3,4,5] your function should return 5, and it should return 3 for the above array without modification.

//alert the result of your function

function last(yourArray) {
	return yourArray[yourArray.length-1];
}

alert(last(arr)); 
