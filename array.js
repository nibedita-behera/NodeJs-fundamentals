let sub=[19,20,30,40];
console.log(sub)

//push()-push an element to the end of an array
sub.push(23)
console.log(sub)

//pop()-pop an element from the end of an array
sub.pop()
console.log(sub)

//forEach()
sub.forEach(element => {
    console.log(element)
});

//map()
let mparray= sub.map((sub)=>{
    if(sub>10)
    {
        return sub+100;
    }
    else{
        return sub;
    }
})
console.log('mparray '+ mparray)
//filter()-to filterout elements
let ftarr=sub.filter((sub)=>{
    if(sub%2 != 0)
        return sub;
})
console.log('Filter array '+ftarr)