function solve() {
    let buttonAdd = document.getElementById("add");
    let sections = document.getElementsByTagName("section")
    let buttonsInSection2=sections[1].getElementsByTagName("button");
    console.log(buttonsInSection2)
    buttonAdd.addEventListener("click", function (e) {
        e.preventDefault();
        let task = document.getElementById("task").value;
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;
        console.log(task, description, date);
        if (task === "" || description === "" || date === "") {
        } else {
            let article = document.createElement("article")
            let h3 = document.createElement("h3");
            h3.textContent=task;
            let p1 = document.createElement("p");
            p1.textContent=`Description: ${description}`;
            let p2 = document.createElement("p");
                p2.textContent=`Due Date: ${date}`
            let div = document.createElement("div");
            let button1 = document.createElement("button");
            button1.classList.add("green")
            button1.textContent = "Start";
            let button2 = document.createElement("button");
            button2.textContent = "Delete";
            button2.classList.add("red");
            div.appendChild(button1);
            div.appendChild(button2);
            article.appendChild(h3)
            article.appendChild(p1)
            article.appendChild(p2)
            article.appendChild(div);
            let orange=sections[1]
            let divInOrange=orange.getElementsByTagName("div")[1];
            divInOrange.appendChild(article);
        }
    })
    document.addEventListener("click",function(e){
        if(e.target.textContent==="Start"){
            console.log(e.target.parentElement.classList)
            let div=e.target.parentElement
            let cln=div.parentElement.cloneNode(true);
           let but =cln.getElementsByTagName("button");
           let div22=but.parentElement;
           console.log(div22)
           but[0].textContent="Delete";
           but[0].className="red";
           but[1].textContent="Finish";
           but[1].className="orange";
           let x=document.getElementById("in-progress")
            x.appendChild(cln);
            div.parentElement.remove();
        }if(e.target.textContent==="Delete"){
            let div=e.target.parentElement;
            div.parentElement.remove();
        }
        if(e.target.textContent==="Finish"){
            let div=e.target.parentElement
            let cln=div.parentElement.cloneNode(true);
            let divinCLN=cln.getElementsByTagName("div")[0];
            divinCLN.remove();
            let div2=sections[3].getElementsByTagName("div")[1];
            div2.appendChild(cln)
            div.parentElement.remove();

        }
    })

}