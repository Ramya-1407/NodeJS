var myPenguin={name:"Elsa",
        origin:"ABCD",
        livingarea:"EFGH"
}
//"Hello, I'm a penguin and my name is [NAME HERE]!"
console.log("Hello, I'm a penguin and my name is "+myPenguin.name)
myPenguin.canFly=false
console.log(myPenguin)
 myPenguin.chirp=function(){
        console.log("CHIRP CHIRP! Is this what penguins sound like?")
}
myPenguin.chirp()
//methods with parameters
myPenguin.sayHello=function(){
    console.log("Hello, I'm Penguin and my name is "+this.name)
}
myPenguin.sayHello()
//changing the penguine name and again calling sayHello() method
myPenguin.name="Anna"
myPenguin.sayHello()


