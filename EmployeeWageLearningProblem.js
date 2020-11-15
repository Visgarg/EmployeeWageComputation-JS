console.log("welcome to employee wage computation problem");
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
const IS_ABSENT=0;
const WAGE_PER_HOUR=20;
const TOTAL_WORKING_DAYS=20;
let totalEmpHours=0;
let employeeWage=0;
for(i=0;i<TOTAL_WORKING_DAYS;i++)
{
let emp_hours= getEmpHours();
totalEmpHours+=emp_hours;
employeeWage= WAGE_PER_HOUR*totalEmpHours;
}
console.log("total work hours "+totalEmpHours);
console.log("totol emp wage "+employeeWage);
console.log("total working days "+TOTAL_WORKING_DAYS);
//UC3
function getEmpHours()
{ 
    let emp_hours=0;
    let checkForEmployeePresence= Math.floor((Math.random()*10)%3);
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
