//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
	name: "Kyle Holt",
	age: "26",
	height: "66 inches",
	gender: "male",
	married: "yes",
	eyeColor: "blue",
	hairColor: "blonde"
};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var values in me) {
	alert(me[values]);
}
