let today=new Date();
console.log('Time in miliseconds '+today.getTime())
console.log('Date '+today.getDate())
console.log("Month "+today.getMonth())
console.log('year '+today.getFullYear())

//settting a date
today.setFullYear(1999,07,15)
console.log(today)

//difference betweeb 2 days
let actualdt=new Date();
let diff=(actualdt-today)/(1000*60*60*24)  //for date format
console.log('difference '+Math.floor(diff))

//