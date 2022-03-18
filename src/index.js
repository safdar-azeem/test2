const data = [
  { name: "Bob", age: 32, gender: "male", isStudent: false },
  { name: "Alice", age: 30, gender: "female", isStudent: false },
  { name: "Philip", age: 22, gender: "male", isStudent: true },
  { name: "Sam", age: 24, gender: "male", isStudent: true },
  { name: "Anna", age: 28, gender: "female", isStudent: false }
];

render();
displayYoungestPerson(data);
displayNames();
displayAverageAge();

// Task 1: Display the name of the youngest person
function displayYoungestPerson() {
  const element = document.getElementById("youngest-person");
  const youngestPerson = data.reduce(
    (a, e) => (e.age < a.age ? e : a),
    data[0]
  );
  element.innerHTML = `The youngest person is ${youngestPerson.name}`;
}

// Task 2: Display the average age in months
function displayAverageAge() {
  const element = document.getElementById("average-age");
  console.log(data);
  const averageAge =
    data.reduce((sum, person) => sum + person.age, 0) / data.length;
  element.innerHTML = `The average age is ${Math.round(averageAge)} months`;
}

// Task 3: Display a list of names of all people
function displayNames() {
  const element = document.getElementById("names");
  const names = data.map((person) => person.name);
  element.innerHTML = `The names are ${names.join(", ")}`;
}

function render() {
  const container = document.getElementById("form-container");

  // Clear previous contents of the container
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  data.forEach((item, index) => {
    addNameInput(index);
    addAgeInput(index);
    addGenderSelect(index);
    addIsStudentCheckbox(index);
    addLineBreak();
  });
}

function addNameInput(index) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = data[index].name;
  input.onchange = () => {
    data[index].name = input.value;
    displayYoungestPerson();
    displayNames();
  };
  addFormElement(input);
}

function addAgeInput(index) {
  const input = document.createElement("input");
  input.type = "number";
  input.value = data[index].age;
  input.onchange = () => {
    data[index].age = +input.value;
    displayYoungestPerson();
    displayAverageAge();
  };
  addFormElement(input);
}

function addGenderSelect(index) {
  const input = document.createElement("select");
  input.value = data[index].gender;
  input.onchange = () => {
    data[index].gender = input.value;
  };

  for (const gender of ["male", "female"]) {
    const option = document.createElement("option");
    option.value = gender;
    option.text = gender;
    option.selected = gender === data[index].gender;
    input.appendChild(option);
  }
  addFormElement(input);
}

function addIsStudentCheckbox(index) {
  const element = document.createElement("input");
  element.type = "checkbox";
  element.checked = data[index].isStudent;
  element.onchange = () => {
    data[index].isStudent = element.checked;
  };
  addFormElement(element);
}

function addLineBreak() {
  const element = document.createElement("br");
  addFormElement(element);
}

function addFormElement(element) {
  const container = document.getElementById("form-container");
  container.appendChild(element);
}
