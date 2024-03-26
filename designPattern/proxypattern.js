// we get more control over the interactions with certain objects.
// A proxy object can determine the behavious whenever we are interacting with the object for example seting and getting the value

// Instead of speak directly to the proxy we will speak to the 
// proxy person who will 

const person = {
    name: "abhay pandey",
    age: 33,
    nationality: "Indian"
};


const proxtPerson = new Proxy(person, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    },
});

// it can be usefulr to add valiation. Auser shouldn't be able to change
// person age to a string value or any empty name

// example : 

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
      if (!obj[prop]) {
        console.log(
          `Hmm.. this property doesn't seem to exist on the target object`
        );
      } else {
        console.log(`The value of ${prop} is ${obj[prop]}`);
      }
    },
    set: (obj, prop, value) => {
      if (prop === "age" && typeof value !== "number") {
        console.log(`Sorry, you can only pass numeric values for age.`);
      } else if (prop === "name" && value.length < 2) {
        console.log(`You need to provide a valid name.`);
      } else {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
        obj[prop] = value;
      }
    },
  });