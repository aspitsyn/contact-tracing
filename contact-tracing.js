const persons = [];

let person = {
  id: 10,
  name: "Elena",
  age: 20,
  contacts: [1, 2, 3, 5, 8, 13],
};

persons.push(person);

person = {
  id: 5,
  name: "Igor",
  age: 42,
  contacts: [1, 2, 3, 5, 8, 12, 13],
};

persons.push(person);

person = {
  id: 12,
  name: "Ivan",
  age: 36,
  contacts: [2, 3, 5, 8, 10, 13],
};

persons.push(person);

const a = (newname) => {
  for (let key in persons) {
    if (persons[key].name == newname) {
      const { name, age, contacts } = persons[key];
      console.log(name, " ", age);
      for (let c of contacts) {
        // console.log(c);
        for (let key in persons) {
          if (persons[key].id == c) {
            const { name, age, contacts } = persons[key];
            console.log(" - ", name, " ", age);
          }
        }
      }
    }
  }
};

a("Elena");
a("Igor");
a("Ivan");

// console.log(String.fromCharCode(189, 43, 190, 61));
