const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('tutoria',(n1,n2)=>{
     console.log(n1+n2);
});
eventEmitter.emit('tutoria',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
let pedro=new Person('lux');
let chris=new Person("chris");
pedro.on('name',()=>{
    console.log('my name :'+pedro.name);
});
chris.on('name',()=>{
    console.log('my name :'+chris.name);
});
pedro.emit('name');
chris.emit('name');