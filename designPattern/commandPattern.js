// command pattern : In that we can decoupled the objects that execute a certain task from the object thats call the funcion

// example of the online food delivery

class OrderManager{
    constructor(){
        this.orders = [];
    }

    placeOrder(order, id){
        this.orders.push(id);
        console.log(`you have successfully order ${order} ${id}`)
    }

    trackOrder(id){
        console.log( `you order ${id} will arive in 20 minutes`)
    }

    cancelOrder(id){
        this.orders = this.orders.filter(order => order.id !== id);
        console.log(`your order has been cancelled`)
    }
}

const manager = new OrderManager();

manager.placeOrder("Paneer tika", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");

// the main problem of this approach is that whenever we want to rename the 
// we need to change the whole code base
// lets refector it 

class OrderManagerComm {
    constructor(){
        this.orders = [];
    }

    execute(command, ...args){
        return command.execute(this.orders, ...args);
    }
}


class Command {
    constructor(execute){
        this.execute = execute;
    }
}

function PlaceOrderCommand(order,id){
    return new Command((orders) => {
        orders.push(id);
        console.log(`you have sucessfully ordered ${order} ${id}`);
    })
}

function CancelOrderCommand(id){
    return new Command((orders) => {
        orders = orders.filter((order) => order.id !== id);
        console.log(`you have cancel the order ${id}`);
    })
}


function TrackOrderCommand(id){
    return new Command(() => console.log(`your order ${id} will arrive in 20 minutes`));
}


const managerComm = new OrderManagerComm();

managerComm.execute(new PlaceOrderCommand("Maha prasad", '3232'));
managerComm.execute( new TrackOrderCommand("3232"))
managerComm.execute(new CancelOrderCommand("3232"));

