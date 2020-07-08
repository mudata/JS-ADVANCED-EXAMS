function solution() {
    let section = document.querySelectorAll('section');
    //console.log(sectionClases);
    let buttonAdd = section[0].getElementsByTagName("button")[0];
    //console.log(buttonAdd)
    buttonAdd.addEventListener("click", function (e) {
        let elements = e.target.parentElement;
        let input = elements.children;
        let value = input[0].value;
        let giftList = section[1].children[1]
        let newGift = document.createElement('li');
        newGift.textContent = section[0].children[1].children[0].value;
        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';
        let discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';
        newGift.appendChild(sendBtn);
        newGift.appendChild(discardBtn);
        newGift.classList.add('gift');
        giftList.appendChild(newGift);
        Array.from(giftList.children)
            .sort((a, b) => a.textContent.toLowerCase().localeCompare(b.textContent.toLowerCase()))
            .map(el => giftList.appendChild(el));
        section[0].children[1].children[0].value = '';
        //console.log(value);
        sendBtn.addEventListener("click",function(e){
            let input = e.target.parentNode.textContent
            let sentGifts = section[2].children[1];
            sentGifts.appendChild(e.target.parentNode);
            input = input.substring(0, input.length - 11);
            e.target.parentNode.textContent = input;
        })
        discardBtn.addEventListener("click", function (e) {
            let input = e.target.parentNode.textContent
            let discardGifts = section[3].children[1]
            discardGifts.appendChild(e.target.parentNode);
            input = input.substring(0, input.length - 11);
            e.target.parentNode.textContent = input;
        })


    });
    
}