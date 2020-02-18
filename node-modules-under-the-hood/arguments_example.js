function example(a,b) {
  console.log('Arguments given by node', arguments)
}

example(1,2)

function myfunction(param1, param2) {
    
}


example(myfunction, "ciao")

//arguments will print also the properties of a function object
myfunction.casa=2
example(myfunction, "ciao")