//welcome message
console.log("welcome to employee wage computation problem");
//UC1
console.log("UC1");
//UC1
/*{
let checkForEmployeePresence= Math.floor((Math.random()*10)%2);
const IS_ABSENT=0;
if(checkForEmployeePresence==IS_ABSENT)
{
    console.log("employee is absent");
}
else
{
    console.log("employee is present");
}
}*/
//UC2
//console.log("UC2");

//declaring constants
const IS_ABSENT=0;
const WAGE_PER_HOUR=20;
const TOTAL_WORKING_DAYS=20;
const TOTAL_WORKING_HOURS=100;
//declaring variables
let totalEmpHours=0;
let employeeWage=0;
let workingDay=0;
let empDailyWageArray= new Array();
//using for loop to iterate over the working days
//for(i=0;i<TOTAL_WORKING_DAYS;i++)
//using while loop to iterate over working days along with condition for working hours
while(workingDay<TOTAL_WORKING_DAYS && totalEmpHours<TOTAL_WORKING_HOURS)
{
workingDay++;
//calling getEmpHours() function to get emp hours for full day, part time hours
let emp_hours= getEmpHours();
//getting total emp hours
empDailyWageArray.push(emp_hours*WAGE_PER_HOUR);
totalEmpHours+=emp_hours;
//calculating total employee wage
employeeWage= WAGE_PER_HOUR*totalEmpHours;
}
//printing values
console.log(empDailyWageArray);
console.log("total work hours "+totalEmpHours);
console.log("totol emp wage "+employeeWage);
console.log("total working days "+workingDay);
//UC3
function getEmpHours()
{ 
    let emp_hours=0;
    //checking for employee presence using math floor and math random
    let checkForEmployeePresence= Math.floor((Math.random()*10)%3);
    //using switch case for choosing different emp hours
    switch(checkForEmployeePresence)
{
    case 1:
        //console.log("employee is present for part time");
        emp_hours=4;
        return emp_hours;
    case 2:
        //console.log("employee is present for full time");
        emp_hours=8;
        return emp_hours;
    default:
       // console.log("employee is absent");
        return emp_hours;
}
}
