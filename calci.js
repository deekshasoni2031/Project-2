let input = document.querySelector("input")
let button = document.querySelectorAll('button')

for(let btn of button){
    btn.addEventListener("click",()=>{
        //console.log("hehehe")
        let txt = btn.innerText

        if(txt == 'C'){
            input.value=""
        }

        else if(txt =='='){
           input.value = eval(input.value)
        }

        else{
            input.value = input.value+txt
        }
    })
}