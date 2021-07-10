class Parent{
    constructor(name,Rollno)
    {
        this.name=name
        this.Rollno=Rollno
    }
    static display()
    {
        console.log('Studen Name '+this.name+' Student RollNo '+this.id)
    }
     code()
    {
        console.log('I love coding')
    }
}
class Child extends Parent{

}
let childobj=new Child('Kitu',101)
childobj.code()
Child.display()