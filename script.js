// var calculate_btn = document.getElementById("calculate_btn"),
//     calculate_age = document.getElementById("calculate_age");

// calculate_btn.addEventListener("click", function() {
//     var birth_date = document.getElementById('birth_date').value;
//     birth_date = new Date(birth_date);
//     // alert(birth_date);
//     var todayDate = new Date();
//     // alert(todayDate)
//     totalAge = Date.now() - birth_date.getTime();
//     ageYear = new Date(totalAge);
//     ageYear = Math.abs(ageYear.getUTCFullYear() - 1970);

//     function ageMonth() {
//         if (todayDate.getMonth() >= birth_date.getMonth()) {
//             if (todayDate.getDate() >= birth_date.getDate()) {
//                 return todayDate.getMonth() - birth_date.getMonth();
//             } else {
//                 if ((todayDate.getMonth() - 1) >= birth_date.getMonth()) {
//                     return (todayDate.getMonth() - 1) - birth_date.getMonth();
//                 } else {
//                     return ((todayDate.getMonth() - 1) + 12) - birth_date.getMonth();
//                 }
//             }
//         }
//     }
//     function ageDay() {
//         if(todayDate.getDate() > birth_date.getDate()) {
//             return todayDate.getDate() - birth_date.getDate();
//         } else if(todayDate.getDate() == birth_date.getDate()) {
//            return todayDate.getDate() - birth_date.getDate();
//         } else {
//             var calDate = new Date(birth_date.getFullYear(), birth_date.getMonth(), 0);
//         return(todayDate.getDate() + calDate.getDate()) - birth_date.getDate();
//         }
//     }
//     calculate_age.innerHTML = " Your Age " + ageYear + " Years " + ageMonth() + " Months " + ageDay() + " Days "
// })






const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculateAge() {
    let todayDate = new Date();
    let inputDate = new Date(document.getElementById("input_date").value);
    let totalMonth, totalDays, totalYears;
    let birthDate = inputDate.getDate();
    let birthMonth = inputDate.getMonth() + 1;
    let birthYear = inputDate.getUTCFullYear();
   
    let currentYear = todayDate.getFullYear();
    let currentMonth = todayDate.getMonth() + 1;
    let currentDate = todayDate.getDate();

    checkLeapYear(currentYear);

    if(birthYear > currentYear || (birthMonth > currentMonth && birthYear == currentYear) || (birthDate > currentDate && birthMonth == currentMonth && birthYear == currentYear)) {
        alert("Not Yet Born");
        return displayDOB("-", "-", "-");
    }
    totalYears = currentYear - birthYear;

    if(currentMonth >= birthMonth) {
        totalMonth = currentMonth - birthMonth;
    } else {
        totalYears-- ;
        totalMonth = 12 + currentMonth - birthMonth;
    }

    if (currentDate >= birthDate) {
        totalDays = currentDate = birthDate;
    } else {
        totalMonth-- ;
        let days = months[currentMonth - 2];
        totalDays = days + currentDate - birthDate;
    
    if(totalMonth < 0) {
        totalMonth = 11;
        totalYears-- ;
    
    }
} 
    displayDOB(totalDays, totalMonth, totalYears);
}
function checkLeapYear(year) {
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}

function displayDOB(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}