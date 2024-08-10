/**
 * Implicit Binding
 * Explicit Binding
 * new Binding
 * window Binding
 * 
 */


// new Binding
var Person = function(name, age) {
    this.name = name;
    this.age = age;
};
// "this" keyword will be bound to the new object which is constructed
var raj = new Person('Raj', 25);





