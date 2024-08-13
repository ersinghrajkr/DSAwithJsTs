// Print 1 to 5 after 2000 milliseconds
function interview() {
    // var is global scope variable.Hence for each iteration will point to a same reference i.e "i". For doesn't wait for
    //the setTimeout and it gets finished before setTimeout is called. Hence the moment it is called the value of "i" was updated
    // to 6(after 5th iteration, "i" becomes 6 and condition become false so it exit from loop).
    // Hence it will print "6", five times
    for(var i=1; i<=5; i++) {
        setTimeout(function(){
            console.log("With Global Scope variable- Shadowing in JS is used here: ",i)
        }, 2000)
    }
}
interview();

// Print 1 to 5 after 2000 milliseconds
function interview2() {
    // let is scope level variable.Hence for each iteration, a new copy of "i" will be attached with setTimeout function.
    // Hence it will print 1 to 5
    for(let i=1; i<=5; i++) {
        setTimeout(function(){
            console.log("With Scope level variable", i)
        }, 2000)
    }
}
interview2()

//Lets fix first problem with the help of Closure
function interview3() {
    // var is global scope variable.Hence for each iteration will point to a same reference. But with Closure, for each iteration
    //a lexical scope will be attached to setTimeout. Hence the moment setTimeout callback function is called, it make use of it's Closure scope
    // So, it will print correct result
    for(var i=1; i<=5; i++) {
        function myClosure(lexicalVar) {
            setTimeout(function(){
                console.log("Closure Scope using lexical: ", lexicalVar)
            }, 2000)
        }
        myClosure(i);
    }
}
interview3();


//Output
/**
 * With Global Scope variable- Shadowing in JS is used here:  6
With Global Scope variable- Shadowing in JS is used here:  6
With Global Scope variable- Shadowing in JS is used here:  6
With Global Scope variable- Shadowing in JS is used here:  6
With Global Scope variable- Shadowing in JS is used here:  6
With Scope level variable 1
With Scope level variable 2
With Scope level variable 3
With Scope level variable 4
With Scope level variable 5
Closure Scope using lexical:  1
Closure Scope using lexical:  2
Closure Scope using lexical:  3
Closure Scope using lexical:  4
Closure Scope using lexical:  5
 */