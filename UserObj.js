var user = {
				name: 'Tyler McGinnis', 
				email: null,
				pwHash: 'U+Ldlngx2BYQk',
				birthday: undefined,
				username: 'tylermcginnis33',
				age: 0
			}

			//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

			for (var values in user) {
				if(!user[values]) delete user[values];
			}
			
			//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', username: 'your username'), rather than my information.

			user.name = "Kyle Holt";
			user.pwHash = "SomePassord1";
			user.username = "myUsername";
			
			//Now console.log your object and make sure it looks right.
			for (var values in user) {
				alert(user[values]);
			}
