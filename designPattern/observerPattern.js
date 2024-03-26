// With the observer pattern, we can subscribe certain objects
// the observers to another object called observable. Whenever an
// an event occurs, the observable notifies all its observers

// An observable object usually contains 3 important parts
// observers : an array of observers that will get notified whenever a specific event occurs
// subscribe(): a method in order to add observers to the obervers list
// unsubscribe(): a method in order to remove observers from the observers list
// notify(): a mehtod to notify all obsercers whenever a specific event occurs


class Obserable {
    constructor(){
        this.observers = [];
    }

    subscribe(func){
        this.observers.push(func);
    }

    unsubscribe(func){
        this.observers = this.observers.filter((observer) => observer !== func)
    }

    notify(data){
        this.observers.forEach((observer) => observer(data));
    }
}

// a popular example is RxJS library
