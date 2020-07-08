function solve() {
   let inputMenu = document.getElementsByClassName("filter")[0];
   let button = inputMenu.children[2];
   let availableProducts = document.getElementById("products");
   let ulAvailable = availableProducts.children[1];
   let products2 = document.getElementById("add-new")
   let h1 = document.getElementsByTagName("h1")[1];
   console.log(h1)
   let buttonAdd = products2.children[4];
   console.log(ulAvailable)
   console.log(button)
   buttonAdd.addEventListener("click", function (e) {
      e.preventDefault();
      let name = products2.children[1].value;
      let quantity = products2.children[2].value;
      let price = products2.children[3].value;
      let li = document.createElement("li");
      let span = document.createElement("span");
      span.textContent = name;
      let strong = document.createElement("strong");
      strong.textContent = `Available: ${quantity}`
      let div = document.createElement("div");
      let strong2 = document.createElement("strong");
      strong2.textContent = price;
      let button2 = document.createElement("button");
      button2.textContent = "Add to Client's List";
      div.appendChild(strong2)
      div.appendChild(button2)
      li.appendChild(span)
      li.appendChild(strong)
      li.appendChild(div);
      console.log(li)
      ulAvailable.appendChild(li);
      products2.children[1].value = "";
      products2.children[2].value = "";
      products2.children[3].value = "";
      button2.addEventListener("click", function (e) {
         let li2 = document.createElement("li");
         li2.textContent = name;
         let strong3 = document.createElement("strong");
         strong3.textContent = Number(price);
         li2.appendChild(strong3);
         let myProducts = document.getElementById("myProducts");
         let ul5 = myProducts.children[1];
         ul5.appendChild(li2);
         let split = h1.textContent.split(": ");
         let num = Number(split[1]);
         let prc = num + Number(price);
         let new1 = `Total Price: ${prc.toFixed(2)}`;
         document.getElementsByTagName("h1")[1].textContent = new1;
         if (quantity === 1) { e.target.parentElement.parentElement.remove(); }
         else {
            quantity--;
            let av = e.target.parentElement.parentElement.children[1].textContent;
            let splt = av.split(": ");
            console.log(splt)
            let b = Number(splt[1]);
            b--;
            e.target.parentElement.parentElement.children[1].textContent = `Available: ${b}`
         }
         myProducts.addEventListener("click", function (e) {
            if (e.target.textContent === "Buy") {
               console.log("eeee")
               ul5.textContent = "";
               document.getElementsByTagName("h1")[1].textContent = `Total Price: 0.00`
            }
         })
      })
   })
}