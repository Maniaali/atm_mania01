#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //USD
let mypincoat = 9876;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    },
]);
console.log(pinAnswer.pin);
//user pincoat
if (pinAnswer.pin === mypincoat) {
    console.log("you entered a correct pincoat!!");
    let oprationAns = await inquirer.prompt([
        {
            name: "opration",
            message: "select one option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (oprationAns.opration === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
    else if (oprationAns.opration === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter a amount to withdraw ",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance = myBalance - amountAns.amount;
            console.log(`amount withdraw sucessfully.your reaming balance is :${myBalance}`);
        }
        else {
            console.log(`you have insufficient balance is${myBalance}`);
        }
        //my - user entered amont
        myBalance = myBalance - amountAns.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (oprationAns.opration === "fast cash") {
        let fastAns = await inquirer.prompt([
            {
                name: "fastoption",
                message: "select one of them",
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000"],
            },
        ]);
        myBalance = myBalance - fastAns.fastoption;
    }
    console.log(`your updated balance is:${myBalance}`);
}
else {
    console.log(" sorry you entered invalid pincoat");
}
