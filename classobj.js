class Student{
    constructor(name,Rollno)
    {
        this.name=name
        this.Rollno=Rollno
    }
    display()
    {
        console.log('Studen Name '+this.name+' Student RollNo '+this.Rollno)
    }
}
//assigning obj values
let stdobj=new Student('Kitu',101)
//prininting the values
stdobj.display()
console.log(stdobj.name)
console.log(stdobj['Rollno'])