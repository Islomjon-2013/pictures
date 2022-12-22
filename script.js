let panels = document.querySelectorAll(`.panel`);
 for(let panel of panels){
    panel.addEventListener(`click`,function(){
        remove()
        panel.classList.add(`active`);
    })
 }

 function remove(){
    for(let panel of panels){
        panel.classList.remove(`active`)
    }
 }