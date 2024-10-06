/* vooraf ingesteld */
console.log(departments);

/* Opdracht 1a */
console.log("De afdeling Sales heeft " + "departments.sales.numberOfEmployees" + " medewerkers" );

/* Opdracht 1b */
console.log("Marketing is een leuke afdeling om te werken " + "departments.marketing.description");

/* Opdracht 1c */
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers");

/* Opdracht 1d */
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.jobs[1].description);

/*/ Opdracht 2a */

const departmentsChoice = prompt('Over welke afdeling wil je meer informatie? Kies uit: marketing / sales / customer-service');
console.log(departmentsChoice);

/* Opdracht 2b */
if (departmentsChoice === "marketing") {
    console.log(departments.marketing.description);
} else if (departmentsChoice === "sales") {
    console.log(departments.sales.description);
} else if (departmentsChoice === "customer-service") {
    console.log(departments["customer-service"].description);
}
 /* Opdracht 2c */

else {
    console.error(departmentsChoice + " ,dit is een ongeldige keuze!");
}

/*--   Opdracht 3 a,b,c   --*/
/*const nextQuestion= prompt ("Je koos marketing, \n over welke functie wil je meer weten? \n Voer een getal tussen 0 en 3 in");
const wrongImport = ("geen juiste invoer");
const firstImport = (departments.marketing.jobs[0].title);
const secondImport = (departments.marketing.jobs[1].title);
const thirdImport = (departments.marketing.jobs[2].title);
const fourthImport = (departments.marketing.jobs[3].title);

if (nextQuestion === 0) {
    console.log("Je koos " + firstImport + ". Een uitdagende rol: " + departments.marketing.jobs[0].description);
} else if (nextQuestion === 1) {
    console.log("Je koos " + secondImport + ". Een uitdagende rol: " + departments.marketing.jobs[1].description);
} else if (nextQuestion === 2) {
    console.log("Je koos " + thirdImport + ". Een uitdagende rol: " + departments.marketing.jobs[2].description);
} else if (nextQuestion === 3) {
    console.log("Je koos " + fourthImport + ". Een uitdagende rol: " + departments.marketing.jobs[3].description);
} else {
    console.log( wrongImport );
}*/

// userInput ("Je koos " + departments[].jobs + ". Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. " + departments[].jobs[ ].title [functietitel afdeling x], 1: [functietitel afdeling x], 2: [functietitel afdeling x], 3: [functietitel afdeling x]");

// --- 4A ---
console.log(departmentsChoice + ' is een leuke afdeling om te werken. Er werken op dit moment ' + departments[departmentsChoice].numberOfEmployees + ' medewerkers.');

// --- 4B ---
const jobChoice = prompt('Je koos ' + departmentsChoice + '. ' + 'Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. 0: ' + departments[departmentsChoice].jobs[0].title + ', 1: ' + departments[departmentsChoice].jobs[1].title + ', 2: ' + departments[departmentsChoice].jobs[2].title + ', 3: ' + departments[departmentsChoice].jobs[3].title);

console.log(jobChoice);

// --- 4C ---
switch (jobChoice) {
    case '0':
        console.log('Je koos ' + departments[departmentsChoice].jobs[0].title + '. Een uitdagende rol! ' + departments[departmentsChoice].jobs[0].description);
        break;
    case '1':
        console.log('Je koos ' + departments[departmentsChoice].jobs[1].title + '. Een uitdagende rol! ' + departments[departmentsChoice].jobs[1].description);
        break;
    case '2':
        console.log('Je koos ' + departments[departmentsChoice].jobs[2].title + '. Een uitdagende rol! ' + departments[departmentsChoice].jobs[2].description);
        break;
    case '3':
        console.log('Je koos ' + departments[departmentsChoice].jobs[3].title + '. Een uitdagende rol! ' + departments[departmentsChoice].jobs[3].description);
        break;
    default:
        console.error('Deze keuze bestaat niet. vul de juiste code in!');
}

document.getElementById (jobChoice);



// let ar1 = "Marketing"
// let lowercaseAr1 = ar1.toLowerCase();
// console.log(lowercaseAr1); //dit toont marketing