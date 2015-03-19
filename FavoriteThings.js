//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
	band: "Muse",
	food: "lamb saag",
	person: "wife",
	book: "Earth Unaware",
	movie: "Count of Monte Cristo",
	holiday: "Halloween"
};

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

var car = {
	favoriteCar: "XV Crosstrek",
	brand: "Subaru"
};

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = "Lettuce";

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);
alert(favoriteThings.food);
