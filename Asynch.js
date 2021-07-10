function f1()
{
    setTimeout(() => {
        console.log('Asynchrous')
        
    }, 1000);
}
function f2(){
    console.log('Output')
}
f1()
f2()