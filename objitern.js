let obj={val1:100,val2:200,val3:300}
// for(let key in obj){
//     console.log(key,':',obj[key])
// }
//After E6style conert into array
//using Object.key()
Object.keys(obj).forEach((key)=>{
    console.log(key,':',obj[key])
})
//object.values,object.enteries
