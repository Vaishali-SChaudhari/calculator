let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach ((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
    
        else if(e.target.innerHTML == 'back'){
            if (string) {
                string = eval(string);
                let newValue = string.toString()   
                if (newValue.length > 0) {
                    let removeLastChar =  newValue.substring(0, newValue.length-1);
                    string = removeLastChar
                    document.querySelector('input').value = removeLastChar;
                }
            }            
        }

        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    }) 
})






