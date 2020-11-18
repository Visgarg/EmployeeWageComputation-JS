class EmployeePayrollData
{
    //property
    //even if removing variable id from here, and using it in constructor does not impact
    //automatically variable is created when used in constructor
    //id;
    //if variable is defined here, and constructor is called, even if property for the same is defined, it is not going there
    //it is directly assigning value to name as variable, not as property
    //name;
    //salary;
    //gender;
    //startDate;

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
        //console.log("Setting: "+name);
        //this._name= name;
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name=name;
        else throw 'Name is Incorrect!';
    }
    //getter setter for id
    get id(){return this._id}
    set id(id)
    {
        let idRegex= RegExp('^[1-9]+$');
        if(idRegex.test(id))
            this._id= id;
        else throw 'ID is incorrect!';
    }
    //getter setter for salary along with regular expression
    /*get salary(){return this._salary;}
    set salary(salary1)
    {
        let salaryRegex= RegExp('^[1-9]{1,}$');
        if(salaryRegex.test(salary1))
            this._salary= salary1;
        else throw 'salary is not valid';
    }*/
    get gender(){return this._gender;}
    set gender(gender1)
    {
        let genderRegex= RegExp('^(F|M)$');
        if(genderRegex.test(gender1))
            this._gender= gender1;
        else throw  'invalid gender';
    }
    get startDate(){return this._startDate;}
    set startDate(startDate)
    {
        let currentDate= new Date();
        if(currentDate- startDate>=0)
            this._startDate= startDate;
        else throw  'invalid date';
    }
    //method 
    //toString()
    //{
      //  return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary;
    //}
    //adding toString() method to contain gender as well as date also
    toString()
    {
        const options= {year:'numeric',month:'long',day:'numeric'};
        //3 Equals are used and return true when both datatype and value matches
        const empDate= this.startDate===undefined ? "undefined": this.startDate.toLocaleDateString("en-US",options); 
        return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary+", gender= "+this.gender+", startdate= "+ empDate;
    }
}
//as i have defined array there and array is dynamic here, hence i am facing only 3 arguments here, other will be undefined by default in this case.
let employeePayrollData= new  EmployeePayrollData(1,"Mark",30000,'M',new Date());
console.log(employeePayrollData.toString());
//changing data directly
try
{
    employeePayrollData.id=0;
    employeePayrollData.name= "Jeff";
    employeePayrollData.salary=0;
    employeePayrollData.gender='a';
    console.log(employeePayrollData.toString());
}
catch(e)
{
    console.error(e);
}

//setting up new object
let newEmployeePayrollData= new EmployeePayrollData(1,"Teresa",25000,"F",new Date());
//as new date() is used, it will display all the values like time upto seconds and weekend, if i need to print only year, month and day, i have to change some things in toString() method.
console.log(newEmployeePayrollData.toString());