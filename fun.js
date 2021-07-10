//declarative function
function add(n1,n2){
    return n1+n2;
}
console.log(add(2,3))

//Anonymous Fuction-without name
function highorder(choice){
    choice();
}
highorder(function(){console.log('Anonymous function')})

//storing functions in variables

function value(choice){
    let var2=choice();
    console.log(var2)
}

let var1= function(){return 'Pass'}

value(var1)
