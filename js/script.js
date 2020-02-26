const acc = document.getElementsByClassName("pricing_card_price");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        const panel = acc[i];
        const children = panel.parentElement.childNodes;
        for(let i = 0; i < children.length; i++){
            if(children[i].className === 'accordion'){
                if (children[i].style.height === "30px") {
                    children[i].style.height = "10px";
                    children[i].childNodes[0].style.display = "none";
                } else {
                    children[i].style.height = "30px";
                    children[i].childNodes[0].style.display = "block";
                }
            }
        }
        console.log("kek");

    });
}