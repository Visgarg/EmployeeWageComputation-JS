class EmployeePayrollData
{
    //property
    //even if removing variable id from here, and using it in constructor does not impact
    //automatically variable is created when used in constructor
    //id;
    //if variable is defined here, and constructor is called, even if property for the same is defined, it is not going there
    //it is directly assigning value to name as variable, not as property
    //name;
    salary;
    gender;
    startDate;

    //constructor
    //even if name is not defined in property before, but if used in constructor
    //js will automatically consider it as a property
    /*constructor(id,name,salary)
    {
        this.id=id;
        this.name= name;
        this.salary= salary;
    }*/
    //using spread method of array to define constructor
    //constructor can only be one in javascript, hence commenting out 1st constructor
    constructor (...params)
    {
        this.id= params[0];
        this.name= params[1];
        this.salary= params[2];
        this.gender= params[3];
        this.startDate= params[4];
    }
    //getter and setter method
    //for defining variable inside a getter setter or properties, syntax is to use underscore and then name of variable.
    get name(){ return this._name;}
    set name(name)
    {
        console.log("Setting: "+name);
        this._name= name;
    }
    //method 
    //toString()
    //{
      //  return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary;
    //}
    //adding toString() method to contain gender as well as date also
    toString()
    {
        return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary+", gender= "+this.gender+", startdate= "+ this.startDate;
    }
}
//as i have defined array there and array is dynamic here, hence i am facing only 3 arguments here, other will be undefined by default in this case.
let employeePayrollData= new  EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
//changing data directly
employeePayrollData.id=0;
employeePayrollData.name= "Jeff";
console.log(employeePayrollData.toString());

//setting up new object
let newEmployeePayrollData= new EmployeePayrollData(1,"Teresa",25000,"F",new Date());
//as new date() is used, it will display all the values like time upto seconds and weekend, if i need to print only year, month and day, i have to change some things in toString() method.
console.log(newEmployeePayrollData.toString());