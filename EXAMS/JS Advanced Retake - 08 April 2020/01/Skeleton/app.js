function solve() {
  
        let button = document.getElementById("add");
        let elements = {
            task: document.getElementById("task"),
            description: document.getElementById("description"),
            date: document.getElementById("date"),
        }
        console.log(elements)
        let sections = document.getElementsByTagName("section");
        let open = sections[1];
        let inProgress = sections[2];
        let complete = sections[3];

       return function solve2() {
                button.addEventListener("click", function (e) {
                    e.preventDefault();
                    if (elements.task.value !== "" && elements.description.value !== "" && elements.date.value !== "") {
                    let div = document.createElement("div")
                    let article = document.createElement("article");
                    let h3 = document.createElement("h3");
                    h3.textContent =elements.task.value;
                    let p = document.createElement("p");
                    p.textContent = "Description: " + elements.description.value;
                    let p2 = document.createElement("p");
                    p2.textContent = "DueDate: " + elements.date.value;
                    article.appendChild(h3)
                    article.appendChild(p)
                    article.appendChild(p2)
                    div.appendChild(article)
                    open.appendChild(div);
                    console.log("ин");
                    
                }
                else { console.log("аут"); }
                });   
        }

}