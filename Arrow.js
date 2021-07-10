function value(choice)
{
    choice();
}

value(() => {console.log('Hello')})

let sum= (n1,n2) => {
    add=n1+n2
    return add
}
console.log("sum "+sum(100,200))