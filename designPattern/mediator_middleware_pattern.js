// Medidator Patterm makes it possible for components to interect 
// with each other through a central point: the medidator. Instead of directly
// example of pilot and air traffic ontroller
// communication between components become confusing 
// when there are large number of components.

// the best example is for medidator pattern is chatroom


class ChatRoom {
    logMessage(user, message) {
        const sender  = user.getName();
        console.log(`${new Date().toLocaleString()}[${sender}]: ${message}`);
    }
}


class User {
    constructor(name, chatroom){
        this.name = name;
        this.chatroom = chatroom;
    }


    getName(){
        return this.name;
    }

    send(message){
        this.chatroom.logMessage(this, message)
    }

}

const chatRoom = new ChatRoom();

const uer1 = new User("Abhay", chatRoom);
const uer2 = new User("Nirbhay", chatRoom);

uer1.send("Chant and be happy")
uer2.send("Hari Bol")