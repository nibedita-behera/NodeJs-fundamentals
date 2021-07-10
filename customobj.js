//using {}
let obj= {};
console.log(obj)

//using literal notaion property

let obj2={val1 : 10,val2:20,val3:30}
console.log(obj2)
console.log('dot notation '+obj2.val2)       //Dot notation
console.log('bracket notation '+obj2['val3'])  //bracket notation

let name='jack'
let id=101

let empobj= {
    empname: name,
    empid: id
}
console.log(empobj)
//Es6style
let empobbj6style={
    name,
    id
}
console.log(empobbj6style)
console.log(Object.values(empobbj6style))
