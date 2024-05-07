#!/usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let condition = true;
console.log(chalk.bgYellow.bold('*******<<< WELCOME TO EASY PAISA APP >>>*******'));


console.log(chalk.bgGreen.bold('\t\n*********<<< PIN 12345 >>>*********\n\t'));

let myBalance = 100000
let myPin = 12345

let ans = await inquirer.prompt([
  {
     name: 'pin',
     type: 'number',
     message: (chalk.bgBlue.bold('ENTER YOUR 5 DIGIT CODE!!!'))
  }
 ]
);
if(ans.pin === myPin){
    console.log(chalk.green.italic("CORRECT PINCODE!!!"))
}else {console.log(chalk.red.italic('INCORRECT PINCODE!!!'))
};
do {
    let operator = await inquirer.prompt([
        {
         name: 'operation',
         type: 'list',
         message: 'Select your operation',
         choices: ['BALANCE','MONEY TRANSFER', 'BANK TRANSFER', 'EASY LOAD','PAKAGE BUNDLE', 'WITHDRAW', 'RECEIVE MONEY', 'BILL PYMENT', 'Exit']
        }
    ])
    if(operator.operation === 'BALANCE'){
        console.log(myBalance);
    }
    if(operator.operation === 'MONEY TRANSFER'){
        let moneyAns = await inquirer.prompt([
            {
                name:'money',
                type: 'number',
                message: 'Enter the amount you want to transfer'
            }
        ])
        if(moneyAns.money <= myBalance){
            console.log(chalk.bgGreen.bold('YOUR MONEY HAS BEEN TRANSFERED SUCCESSFULLY!!!'));
            myBalance = myBalance - moneyAns.money;
            console.log(myBalance);
        } else {console.log(chalk.red.bold('INSUFFICIENT BALANCE'))};
    }
    if(operator.operation === 'BANK TRANSFER'){
        let bankAns = await inquirer.prompt([
            {
                name: 'bank',
                type: 'list',
                message: 'Select your bank',
                choices: ['UBL','Alied bank','Bank Alhabib','Islamic Bank','Bank Alfalah']
            },
            {
                name: 'amount',
                type: 'number',
                message: 'Enter the amount you want to transfer'
            }
        ])
        if(bankAns.amount <= myBalance){
            console.log(chalk.bgGreen.bold('YOUR MONEY HAS BEEN TRANSFERED SUCCESSFULLY!!!'));
            myBalance = myBalance - bankAns.amount;
            console.log(myBalance);
        }else{console.log(chalk.red.bold('INSUFFICIENT BALANCE'))}
    }
    if(operator.operation === 'EASY LOAD'){
        let laodAns = await inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'ENTER THE AMOUNT YOU WANT TO LOAD!'
            },
            {
                name: 'phoneNumber',
                type: 'number',
                message: 'ENTER YOUR PHONE NUMBER!'
            }
        ])
        if(laodAns.amount <= myBalance){
            console.log(chalk.bgGreen.bold('LOAD SUCCESSFULL!!!'));
            myBalance = myBalance - laodAns.amount;
            console.log(myBalance);
        }else{console.log(chalk.red.bold('INSUFFICIENT BALANCE'))}
    }
    if(operator.operation === 'PAKAGE BUNDLE'){
        let pakageAns = await inquirer.prompt([
            {
              name: 'package',
              type: 'list',
              message: 'SELECT YOUR PAKAGE!!',
              choices: ['Social Bundle 1000', 'Facebook 400', 'Instagram 300', 'Twitter 500', 'Tiktok 200', 'whatsapp 350']
            },
            {
                name: 'phoneNumber',
                type: 'input',
                message: 'ENTER YOUR PHONE NUMBER!!'
            }
        ])
        if(pakageAns.package === 'Social Bundle 1000'){
            console.log(chalk.bgGreen.bold('YOUR BUNDLE SUBSCRIBED SUCCESSFULLY!!!'))
        let remaining = myBalance - 1000
         console.log('your remaining balance: ' + remaining);
    }else if(pakageAns.package === 'Facebook 400'){
        console.log(chalk.bgGreen.bold('YOUR BUNDLE SUBSCRIBED SUCCESSFULLY!!!'));
        let remaining1 = myBalance - 400
        console.log('your remaining balance: ' + remaining1);
    }else if(pakageAns.package === 'Instagram 300'){
        console.log(chalk.bgGreen.bold('YOUR BUNDLE SUBSCRIBED SUCCESSFULLY!!!'));
        let remaining2 = myBalance - 300
        console.log('your remaining balance: ' + remaining2);
    }else if(pakageAns.package === 'Twitter 500'){
        console.log(chalk.bgGreen.bold('YOUR BUNDLE SUBSCRIBED SUCCESSFULLY!!!'));
        let remaining3 = myBalance - 300
        console.log('your remaining balance: ' + remaining3);
    }else if(pakageAns.package === 'Tiktok 200'){
        console.log(chalk.bgGreen.bold('YOUR BUNDLE SUBSCRIBED SUCCESSFULLY!!!'));
        let remaining4 = myBalance - 200
        console.log('your remaining balance: ' + remaining4);
    }else if (pakageAns.package === 'whatsapp 350'){
        console.log(chalk.bgGreen.bold('YOUR BUNDLE SUBSCRIBED SUCCESSFULLY!!!'));
        let remaining5 = myBalance - 350
        console.log('your remaining balance: ' + remaining5);
    }
    }if(operator.operation === 'WITHDRAW'){
        let withdrawAns = await inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'ENTER THE AMOUNT YOU WANT TO WITHDRAW!'
            }
        ])
        if(withdrawAns.amount <= myBalance){
            console.log(chalk.bgGreen.bold('YOUR MONEY HAS BEEN TRANSFERED SUCCESSFULLY!!!'));
            myBalance = myBalance - withdrawAns.amount;
            console.log('your remaining balance is '+ myBalance);
        }else{console.log(chalk.red.bold('INSUFFICIENT BALANCE'))}
    }
    if(operator.operation === 'RECEIVE MONEY'){
        let receiveAns = await inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'ENTER THE AMOUNT YOU WANT TO RECEIVE!'
            }
        ])
        if(receiveAns.amount <= myBalance){
            console.log(chalk.bgGreen.bold('YOUR MONEY HAS BEEN TRANSFERED SUCCESSFULLY!!!'));
            myBalance = myBalance + receiveAns.amount;
            console.log('your remaining balance is '+ myBalance);
        }else{console.log(chalk.red.bold('INSUFFICIENT BALANCE'))}
    }
    if(operator.operation === 'BILL PYMENT'){
        let billAns = await inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'ENTER THE AMOUNT YOU WANT TO PAY!'
            }
        ])
        if(billAns.amount <= myBalance){
            console.log(chalk.bgGreen.bold('YOUR MONEY HAS BEEN TRANSFERED SUCCESSFULLY!!!'));
            myBalance = myBalance - billAns.amount;
            console.log('your remaining balance is '+ myBalance);
        }else{console.log(chalk.red.bold('INSUFFICIENT BALANCE'))}
    }
    if(operator.operation === "Exit"){
        console.log(chalk.bgRed.bold('THANK YOU FOR USING OUR SERVICES!!!'))
        process.exit(0)}
    
} while (condition);




