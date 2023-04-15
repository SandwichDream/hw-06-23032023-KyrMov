// let date = new Date();
// console.log(date);

// let myDate = new Date(2022, 02, 11, 0, 30, 0);
// console.log(myDate);

// let dateFormat = new Date();
// console.log(`ISO: ${dateFormat.toISOString()}`);
// console.log(`Date: ${dateFormat.toDateString()}`);
// console.log(`UTC: ${dateFormat.toUTCString()}`);

// let today = new Date();
// console.log(`Get year ${today.getFullYear()}`);
// console.log(`Get month ${today.getMonth()}`);
// console.log(`Get hours ${today.getHours()}`);
// console.log(`Get minute ${today.getMinutes()}`);

// let text = "Hello";
// console.log(text[0]);
// console.log(text.length);

// if(text.length>0){
//     console.log(text.slice(1,3));
//     console.log(text.substring(0,3));
//     console.log(text.substring(2));
// }

// let skills = "html, css, js";
// let newSkills = skills.replace("css", "scss");
// console.log(skills);
// console.log(newSkills);

// console.log(Boolean(2<1));
// console.log(Boolean(2>1));

// console.log(typeof Boolean());
// console.log(typeof true);
// console.log(typeof 2>1);

// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вікв функції конструкторі повиний бути метод виводу інформації про юзера. 
// Метод повинен бути винесений в прототип.

console.log("1) About user");

function UserObj(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}
UserObj.prototype.info = function(){
    console.log(`This user ${this.name} ${this.lastName} with age ${this.age}`);
}

let person = new UserObj(String(prompt("Enter name:")), String(prompt("Enter surname:")), Number(prompt("Enter age:")));

console.log(person);
person.info();

// 2)Створити метод на прототайп для оновлення значень обєкту юзер наприклад змінити імя або вік користувача

console.log("2) Rewrite user");

person = new UserObj(String(prompt("Rewrite name:")), String(prompt("Rewrite surname:")), Number(prompt("Rewrite age:")));

console.log(person);
person.info();

// 3)Створити функцію сорт яка  отримує  массив з створеними обєктами юзер і сортує їх по віку ( в порядку зростання)

console.log("3) Sort users by age");

let arrayUsers = [
    {
        name: "Blob",
        age: 21
    },
    {
        name: "Ed",
        age: 23
    },
    {
        name: "Bob",
        age: 30
    },
    {
        name: "Ander",
        age: 18
    },
    {
        name: "Jhon",
        age: 28
    }
];

console.log(arrayUsers.sort((firstEl, secondEl) => secondEl.age - firstEl.age));

// 4) Отримати від користувача через promt  значення name  вивести в консоль, першу і останню літеру з name

console.log("4) First and last char");

let name0 = String(prompt("Enter name:").trim());
console.log(`Full name: ${name0};\nFirst char: ${name0.charAt(name0[0])};\nLast char: ${name0.charAt(name0.length-1)}.`);

// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину більше 10 символів то відрізає все після 10 символа і додає 3 крапки до стрінга

console.log("5) Shortener :)");

function shortener (str) {
    return str.trim().length > 10 ? str.trim().substring(0, 10) : str;
}

console.log(shortener(String(prompt("Enter string:"))));

// 6) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя,( задача на повторення Math властивостей). Наприклад:

arr = [
    1810,
    1700,
    1601,
    2000
]

function century(num) {
    return Math.ceil(num/100);
}

arr.forEach((index)=>{
    console.log(`From ${index} to ${century(index)}`);
});

// 7) Створити функцію яка повертає інформацію який сьогодні день, місяць рік Наприклад getDayInfo() -> Сьогодні вівторок 11 квітня 2023

function getDayInfo() {
    let today = new Date();
    let day = today.getDay() === 1 ? "понеділок" :
    today.getDay() === 2 ? "вівторок" :
    today.getDay() === 3 ? "середа" :
    today.getDay() === 4 ? "четвер" :
    today.getDay() === 5 ? "п'ятниця" :
    today.getDay() === 6 ? "субота" : "неділя";
    let month = today.getDate() === 0 ? "січеня" :
    today.getMonth() === 1 ? "лютого" :
    today.getMonth() === 2 ? "березеня" :
    today.getMonth() === 3 ? "квітня" :
    today.getMonth() === 4 ? "травеня" :
    today.getMonth() === 5 ? "червня" :
    today.getMonth() === 6 ? "липня" :
    today.getMonth() === 7 ? "серпня" :
    today.getMonth() === 8 ? "вересня" :
    today.getMonth() === 9 ? "жовтня" :
    today.getMonth() === 10 ? "листопада" : "грудня";

    return `Сьогодні ${day} ${today.getDate()} ${month} ${today.getFullYear()}`;
}

console.log(getDayInfo());