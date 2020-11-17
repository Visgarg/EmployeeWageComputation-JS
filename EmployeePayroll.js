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
    constructor(id,name,salary)
    {
        this.id=id;
        this.name= name;
        this.salary= salary;
    }
    //getter and setter method
    get name(){ return this.Name;}
    set name(name)
    {
        console.log("Setting: "+name);
        this.Name= name;
    }
    //method 
    toString()
    {
        return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary;
    }
}
let employeePayrollData= new  EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
//changing data directly
employeePayrollData.id=0;
employeePayrollData.name= "Jeff";
console.log(employeePayrollData.toString());