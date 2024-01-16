//UC1
const absent = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == 1){
    console.log("Employee is present.");
} else {
    console.log("Employee is absent.");
}

//UC2
const wagePerHour = 20;
const fullTimeHours = 8;
const partTimeHours = 4;
const partTime = 1;
const fullTime = 2;
let employeeCheck = Math.floor(Math.random() * 10) % 3;
switch(employeeCheck){
    case fullTime:
        empHours = fullTimeHours;
        break;
    case partTime:
        empHours = partTimeHours;
        break;
    default:
        empHours = 0;
}

let empWage = empHours * wagePerHour;
console.log("UC2 - Daily wage of employee: " + empWage + " Rs");

//UC3
function workHours(employeeCheck){
    switch(employeeCheck){
    case fullTime:
        return fullTimeHours;
        break;
    case partTime:
        return partTimeHours;
        break;
    default:
        return 0;
    }
}
let empHrs = 0;
let emplCheck = Math.floor(Math.random() * 10) % 3;
empHrs = workHours(emplCheck);
let emplWage = empHrs * wagePerHour;
console.log("UC3 - Daily employee wage: " + emplWage + " Rs");

//UC4
workingDays = 20;
let dailyWage = 0;
let totalWage;

for(let day = 1;day<=workingDays;day++){
    let emCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += workHours(emCheck);
}

dailyWage += empHrs * wagePerHour;
console.log("UC4 - Total employee hours: " + empHrs + " and " + "Total wage for a month: " + dailyWage);

//UC5
let totalEmpWage = 0;
totalWorkingDays = 0;
totalWorkingHours = 0;
let maxWorkingDays = 20;
let maxWorkingHours = 160;
while(totalWorkingDays <= maxWorkingDays && totalWorkingHours <= maxWorkingHours){
    totalWorkingDays++;
    let eCheck = Math.floor(Math.random() * 10) % 3;
    totalWorkingHours += workHours(eCheck); 
}
totalEmpWage += totalWorkingHours * wagePerHour;
console.log("UC5 - Total Days: " + totalWorkingDays + " and Total Employee Wage: " + totalEmpWage);