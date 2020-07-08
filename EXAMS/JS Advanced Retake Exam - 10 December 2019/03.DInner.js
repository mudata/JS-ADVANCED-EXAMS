class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    shopping(product) {
        let typeProduct = product[0];
        let price = product[1];
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        } else {
            this.products.push(typeProduct);
            this.budget -= price;
            return `You have successfully bought ${typeProduct}!`
        }
    }
    recipes(recipe) {
        //console.log(this.dishes);
        //console.log(this.products);
        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;
        let arr = [];
        for (let i = 0; i < productsList.length; i++) {
            const element = productsList[i];
            for (let j = 0; j < this.products.length; j++) {
                const element2 = this.products[j];
                if (element === element2) {
                    arr.push(element);
                    break;
                } else {

                }
            }

        }
        if (arr.length === productsList.length) {//suvpadat
            let obj = { recipeName, productsList }//dovursvam
            this.dishes.push(obj)
            return `${recipeName} has been successfully cooked!`
        } else {
            throw new Error("We do not have this product");
        }
    }
    inviteGuests(name, dish) {
        const foundDish = this.dishes.find(element => element.recipeName === dish);
        let keys = Object.keys(this.guests);
        if (foundDish === undefined) {
            throw new Error("We do not have this dish");
        }
        if (keys.length == 0) {
            this.guests[name] = dish
            
            return `You have successfully invited ${name}!`
        } else {
            const foundName = keys.find(element => element == name);
            //console.log(foundName)
            if (foundName!==undefined) {
                throw new Error("This guest has already been invited");
            }
            else {
                let obj2 = {
                    name: dish,
                }
                this.guests[name] = dish
                //console.log(this.guests)
                return `You have successfully invited ${name}!`
            }
        }

    }
    showAttendance(){
        let entries1=Object.entries(this.guests);
        let str=[];
        //console.log(entries1)
        for (let i = 0; i < entries1.length; i++) {
            const element = entries1[i];
            //console.log(element)
            let name=element[0];
            let dish=element[1];
            //let dish3=element[1];
           
            for (let j = 0; j < this.dishes.length; j++) {
                const element = this.dishes[j];
                //console.log(element.recipeName)
                //console.log(element.productsList)
                if(dish===element.recipeName){
                    let a=(element.productsList).join(", ");
                    str.push(`${name} will eat ${dish}, which consists of ${a} `)
                    
                }
            }
            
            
        }
        return str.join("\n");
        // /console.log(entries1)
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}))
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}))
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}))

dinner.inviteGuests('Alex', 'Oshav')
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice')
dinner.inviteGuests('Georgi', 'Peppers filled with beans')
console.log(dinner.showAttendance());