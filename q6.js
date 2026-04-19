// Q6: Objects

const myProfile = {
  name: "Adeyemi Silas",
  age: 30,
  country: "Nigeria",
  hobby: "Coding"
};

// Function to display profile
function displayProfile(person) {
  console.log(`${person.name} is ${person.age} years old, lives in ${person.country}, and loves ${person.hobby}.`);
}

// Call the function
displayProfile(myProfile);
