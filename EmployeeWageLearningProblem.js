//welcome message
console.log("welcome to employee wage computation problem");
//UC1
//console.log("UC1");
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
let empDailyWageMap= new Map();
//using for loop to iterate over the working days
//for(i=0;i<TOTAL_WORKING_DAYS;i++)
//using while loop to iterate over working days along with condition for working hours
while(workingDay<TOTAL_WORKING_DAYS && totalEmpHours<TOTAL_WORKING_HOURS)
{
workingDay++;
//calling getEmpHours() function to get emp hours for full day, part time hours
let emp_hours= getEmpHours();
//adding emp wages in array
empDailyWageArray.push(emp_hours*WAGE_PER_HOUR);
//adding emp wages in map
empDailyWageMap.set(workingDay,emp_hours*WAGE_PER_HOUR);
//getting total emp hours
totalEmpHours+=emp_hours;
//calculating total employee wage
employeeWage= WAGE_PER_HOUR*totalEmpHours;
}
//printing values
console.log("total work hours "+totalEmpHours);
console.log("totol emp wage "+employeeWage);
console.log("total working days "+workingDay);
console.log(empDailyWageArray);
//UC 7a- calculate total wage using array foreach traversal or reduce method
let totalEmployeeWage=0
function sum(dailyWage)
{
   totalEmployeeWage+= dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("7a Emp wage with foreach: "+totalEmployeeWage);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}

console.log("UC 7a- Emp wage with reduce: "+empDailyWageArray.reduce(totalWages,0));

//UC 7B- show the day along with daily wage using array map helper functions.
let workDayCount= 0;
function mapDayWithWage(dailyWage)
{
    workDayCount++;
    return workDayCount + " = "+ dailyWage; 
}
let mapDaywithWageArray= empDailyWageArray.map(mapDayWithWage);
console.log("7B: "+ mapDaywithWageArray);
//UC 7C- Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray= mapDaywithWageArray.filter(fulltimeWage);
console.log("7C: "+fullDayWageArray); 
//UC 7D- finding first day when employee was present for full day
console.log("7D first time employee was present for 1st time: "+ mapDaywithWageArray.find(fulltimeWage));
//UC 7E- checking if every element of fullday wage array is truely holding 160 as employee wage.
console.log("7E: checking if all elements of full time employee has wage of 160-  "+fullDayWageArray.every(fulltimeWage));
//UC 7F- checking if there is any part time wage
function checkPartTime(dailyWages)
{
    return dailyWages.includes('80');
}
console.log("7F- Checking if there is a employee with part time wage "+mapDaywithWageArray.some(checkPartTime));
//UC 7G: finding out no of days employee actually worked
function totalDaysWorked(noOfDays,dailyWage)
{
    if(dailyWage>0)
    {
        return noOfDays+=1;
    }
    return noOfDays;
}
console.log("7G: The no of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));
//UC8 calculating total wage using employee wages of each day in map
let totalWageFromMap=0;
for(let empWage of empDailyWageMap.values())
{
    totalWageFromMap+=empWage;
}
//printing map
console.log(empDailyWageMap);
console.log("UC8: total emp wage from map: "+ totalWageFromMap);