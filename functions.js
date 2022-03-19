const sayHelloA = () => { console.log("Hello")}; // w f.strzałkowej jak mieścimy się w jednej linii to nie trzeba wąsów
const sayHelloB = () => console.log("Hello"); // równoważne { return console.log("Hello") }

//sayHello2 zwraca console.log
//sayHello nic nie zwraca bo ma nawaisy ale nie ma return

const sayHello = () => { return "Hello_1" }; 
const sayHello2 = () => "Hello_2";
function sayHello3() {
    return "Hello_3"
}

console.log(sayHello() + ", Kasia")
console.log(sayHello2() + ", Kasia")
console.log(sayHello3() + ", Kasia")

module.exports = {
    sayHello,
    sayHello2,
    sayHello3
};

console.log("plik functions.js został załadowany prawidłowo")