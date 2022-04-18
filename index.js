// const inputs = document.getElementsByTagName('input');
const inputs = document.getElementsByClassName('input-class');
const error_msg = document.getElementsByClassName("inscription-block__error");
const form_elt = document.getElementById('submit-form');

console.log(form_elt);

for(let i = 0 ; i < error_msg.length ; i++){
    error_msg[i].style.display = "none";
    inputs[i].style.background = "none";
}

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('input', function(){
        inputs[i].style.borderColor = "";
        error_msg[i].style.display = "none";
        inputs[i].style.background = "";  
    })
}

function checkErrors(event){
    event.preventDefault();
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value.length != 0){
            error_msg[i].style.display = "none"
        }
        else{
            error_msg[i].style.display = "block";
            inputs[i].style.borderColor = "#ffacae";
            inputs[i].style.background = "url('/images/icon-error.svg') no-repeat right 10px center"  
            inputs[i].style.backgroundSize = "1.5em"   
        }

        if(inputs[i].type == "email"){
            if(!inputs[i].value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                error_msg[i].style.display = "block";
                inputs[i].style.borderColor = "#ffacae";
                inputs[i].style.background = "url('/images/icon-error.svg') no-repeat right 10px center"  
                inputs[i].style.backgroundSize = "1.5em";  
            }
        }

    }
 
}

form_elt.addEventListener('submit',checkErrors);