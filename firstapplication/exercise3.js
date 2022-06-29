var myPenguin={name:'Anna', origin:'India',livingarea:'BVRT'}
console.log("Hello, I'm penguine and my name is "+myPenguin.name)
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
myPenguin.name="Elsa"
myPenguin.sayHello()
//adding another method fly
myPenguin.fly=function(){
    if(this.canFly)
        console.log("I can fly")
    else
        console.log("I can't fly")
}
myPenguin.fly()
myPenguin.canFly=true
myPenguin.fly()
//writing for loop to print the properties in myPenguin
for(property in myPenguin){
    console.log(property);
}
for(property in myPenguin){
    console.log(myPenguin[property]);
}