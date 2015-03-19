//Write a loop that loops through nums, if the item is even, it adds it to the evens array, if the item is odd, it adds it to the odds array.
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

for (var i = 0; i < nums.length; i++) {
	if(nums[i] % 2 == 0) evens.push(nums[i]);
	else odds.push(nums[i]);
}

alert("odds is now " + odds);
alert("evens is now " + evens);
