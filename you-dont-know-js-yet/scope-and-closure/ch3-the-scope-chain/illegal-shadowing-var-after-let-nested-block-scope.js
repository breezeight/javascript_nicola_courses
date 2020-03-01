'use strict';
function something() {
    let special = "JavaScript";
    console.log(special);
    {
        // Syntax Error, we are still in the same "function scope", we 
        var special = 42;
        console.log(special);
    }
}
something();