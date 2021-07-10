function f1(callback)
{
    setTimeout(() => {
        console.log('Asynchrous')
        callback();
    }, 1000);
}
function f2(){
    console.log('Output')

}
f1(f2)