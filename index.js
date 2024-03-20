#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "NumberOne",
        message: "Kindly Enter First Number :"
    },
    {
        type: "number",
        name: "Numbertwo",
        message: "Kindly Enter Second Number :"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent", "Module"],
        message: "Select Operator"
    }
]);
if (answers.NumberOne && answers.Numbertwo && answers.Operator) {
    let ans = 0;
    if (answers.Operator === "Addition") {
        ans = (answers.NumberOne + answers.Numbertwo);
    }
    else if (answers.Operator === "Subtraction") {
        ans = (answers.NumberOne - answers.Numbertwo);
    }
    else if (answers.Operator === "Multiplication") {
        ans = (answers.NumberOne * answers.Numbertwo);
    }
    else if (answers.Operator === "Division") {
        ans = (answers.NumberOne / answers.Numbertwo);
    }
    else if (answers.Operator === "Exponent") {
        ans = (answers.NumberOne ** answers.Numbertwo);
    }
    else if (answers.Operator === "Module") {
        ans = (answers.NumberOne % answers.Numbertwo);
    }
    console.log(`Your Answer is `, ans);
}
else {
    console.log(chalk.red("Invalid Input"));
}
