class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        let found = this.allCustomers.find(element => element.firstName === customer.firstName && element.lastName === customer.lastName);
        if (found === undefined) {
            let obj = {
                firstName: customer.firstName,
                lastName: customer.lastName,
                personalId: customer.personalId,
                totalMoney: 0,
                Transactions: []
            }
            this.allCustomers.push(obj);
            return obj;
        } else {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        // let found=this.clients.find(element => element);
    }
    depositMoney(personalId, amount) {
        let found2 = this.allCustomers.find(element => element.personalId === personalId);
        if (found2 === undefined) {
            throw new Error('We have no customer with this ID!')
        } else {
            for (let i = 0; i < this.allCustomers.length; i++) {
                const element = this.allCustomers[i];
                if (element.personalId === personalId) {
                    this.allCustomers[i].totalMoney += amount;
                    let str=`${element.firstName} ${element.lastName} made deposit of ${amount}$`
                    this.allCustomers[i].Transactions.push(str)
                    return `${this.allCustomers[i].totalMoney}$`
                }
            }
        }
    }
    withdrawMoney (personalId, amount){
        let found3 = this.allCustomers.find(element => element.personalId === personalId);
        if (found3 === undefined) {
            throw new Error('We have no customer with this ID!')
        } else {
        //console.log(found3)
        //console.log(amount)
        for (let i = 0; i < this.allCustomers.length; i++) {
            const element = this.allCustomers[i];
            if(element.personalId===personalId){
                if(this.allCustomers[i].totalMoney<amount){
                    throw new Error('We have no customer with this ID!')
                }else{
                    this.allCustomers[i].totalMoney-=amount;
                    let str2=`${element.firstName} ${element.lastName} withdrew ${amount}$!`
                    this.allCustomers[i].Transactions.push(str2);
                    return `${this.allCustomers[i].totalMoney}$`;
                }
            }
        }
        
        }




    }
    customerInfo (personalId){
        let found4 = this.allCustomers.find(element => element.personalId===personalId);
        if(found4===undefined){
           throw new Error('We have no customer with this ID!');
        }else{
            //console.log(found4)
            let str5=`Bank name: ${this._bankName}\nCustomer name: ${found4.firstName} ${found4.lastName}\nCustomer ID: ${found4.personalId}\nTotal Money: ${found4.totalMoney}$\nTransactions:\n`
            for (let i = found4.Transactions.length-1; i >=0; i--) {
                const element = found4.Transactions[i];
                // if(i+1===found4.Transactions.length){
                //     str5=str5.concat(`${found4.Transactions.length+1}. `+element)
                // }else {
                    str5=str5.concat(`${i+1}. `+element+"\n")
                //}
                
                
            }
           return str5;
        }
    }
}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));