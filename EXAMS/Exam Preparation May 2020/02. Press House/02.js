function pressHouse(){
class Article{
    constructor(title,content){
        this.title=title;
        this.content=content;
    }
    toString(){
        return `Title: ${this.title}\nContent: ${this.content}`;
    }
}
class ShortReports extends Article{
    constructor(title,content,originalResearch){
        super(title,content);
        if(content.length>150){
            console.log("sdsdads")
        }
        this.originalResearch=(function(){
            if(originalResearch.hasOwnProperty("title")&&originalResearch.hasOwnProperty("author")){
return {title:originalResearch.title,
author:originalResearch.author,}
            }else{ throw new Error('The original research should have author and title.')}
            
        })()
        this.comments=[];
    }
    addComment(comment){
        //let found1=this.originalResearch.find(element => element.hasOwnProperty("title")&&element.hasOwnProperty("author"));
        // if(comment.length>150){
        //     throw new Error('Short reports content should be less then 150 symbols.')
        // }
        //console.log(this.originalResearch.hasOwnProperty("title"))
        this.comments.push(comment);
            return "The comment is added.";
        
       
    }
    toString(){
        //let ss=super.toString().substr(0,super.toString().length-2)
        let str=super.toString()+`\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`
        
        if(this.comments.length>0){
            str+="\nComments:"
            for (let i = 0; i < this.comments.length; i++) {
                const element = this.comments[i];
                if(i+1==this.comments.length){
                    str+=element;
                }else{
                    str+="\n"+element+"\n";
                }
            }
        }
        return str;
    }
}
class BookReview extends Article{
    constructor(title,content,book){
        super(title,content)
        this.book={
            name:book.name,
            author:book.author,
        }
        this.clients=[];
    }
    addClient(clientName,  orderDescription){
        let found=this.clients.find(element => element.clientName === clientName&&element.orderDescription===orderDescription);
        if(found===undefined){
            let obj={
                clientName:clientName,
                orderDescription:orderDescription,
            }
            this.clients.push(obj);
            return `${ clientName } has ordered a review for ${this.book.name}"`
        
            
        }else{
            throw new Error('This client has already ordered this review.');
           }
    }
    toString() {
        let str=super.toString()+`\nBook: ${this.book.name}`
        
        if(this.clients.length>0){
            str+="\nOrders:"
            for (let i = 0; i < this.clients.length; i++) {
                const element = this.clients[i];
                if(i+1==this.clients.length){
                    str+=`${element.clientName} - ${element.orderDescription}.`;
                }else{
                    str+="\n"+`${element.clientName} - ${element.orderDescription}.`+"\n";
                }
            }
        }
        return str;
    }
}
return{
    Article,
    ShortReports,
    BookReview,
}
}


let classes = pressHouse();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 
console.log("------------------------------")
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddin its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2",author:"sss"});
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString()); 
console.log("------------------------------")
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 

