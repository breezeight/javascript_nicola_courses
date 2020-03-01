'use strict';
function something() {
    let special = "JavaScript";
    console.log(special);

    function something2(){
        var special = 42;   // totally fine shadowing
        console.log(special);
        // ..
    }
    something2();
    console.log(special);
}
something();