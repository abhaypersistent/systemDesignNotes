// factory pattern
// with the factory pattern we can use factory functions in order to create a new object 
// without using New

// for example we have a function passing other values and it creating
// new element and returning new object

const createUser = ({firstName, secondName, thirdName}) => ({
    firstName,
    secondName,
    email,
    fullName() {
        return `${this.firstName} ${this.secondName}`;
    }
})


const user1 = createUser({
    firstName: "abhay",
    secondName: "Pandey",
    email: "test"
});

const user2 = createUser({
    firstName: "abhay",
    secondName: "Pandey",
    email: "test"
});

// its useful if we are creating relavitely complex and configurable objects
// with factory pattern we can easily create new objects that contain 
// the custom keys and value

// useful when we have multiple smaller objects that share the same properties


// CONS
// best way will be create new instance instead of new objects each time

class User {
    constructor(firstName, lastName, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const user1Class= new User({
    firstName: "abhay",
    lastName: "Pandey",
    email: "abhay",
  });
  
  const user2Class = new User({
    firstName: "Nikhil",
    lastName: "sonkul",
    email: "email",
  });
  


