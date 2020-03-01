'use strict';
function something() {
    var special = "JavaScript";
    console.log(special);
    {
        let special = 42;   // totally fine shadowing
        console.log(special);
    }
}
something();