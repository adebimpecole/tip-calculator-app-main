(function(){
    "use strict"

    const no_of_ppl = document.querySelector(".p_enter");
    const bill = document.querySelector(".b_enter");
    const percent1 = document.querySelectorAll(".no");
    const tps = document.querySelectorAll(".tp");
    const tip_amount = document.querySelector(".tips");
    const total = document.querySelector(".total");
    const err = document.querySelector(".error");
    const custom = document.querySelector(".cstm");
    const reset = document.querySelector(".reset");

    var tip;
    var total_per_person;
    let cstm;
    var pcnt;

    // collects the tip value on click
    tps.forEach((element, index) => {
        element.addEventListener("click", () => {
            pcnt = parseInt(percent1[index].textContent);
            element.style.backgroundColor = "hsl(172, 67%, 45%)";
            element.style.color = "hsl(183, 100%, 15%)";
        })
    })

    // keydown event
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        
        // check if the keydown event is on enter key
        if (name === 'Enter') {
        
            // check if the no of people input field is empty or has a value of 0
            if(no_of_ppl.value==0){
                // creates an error if the condition is met
                err.style.display = "flex";
                no_of_ppl.style.outline = "2px solid hsl(0, 83%, 61%)";
            }
            else{
                // removes error if condition is not met
                err.style.display = "";
                no_of_ppl.style.outline = "";

                // checks if the custom input field is empty
                if(custom.value){
                    pcnt = custom.value;
                    total_per_person = parseInt(bill.value) / parseInt(no_of_ppl.value);
                    tip = total_per_person  * (pcnt/100);
                    tip_amount.innerHTML = `$${tip.toFixed(2)}`;
                    total.innerHTML = `$${total_per_person.toFixed(2)}`; 
                    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
                    reset.style.color = "hsl(183, 100%, 15%)";
                }

                else{
                    total_per_person = parseInt(bill.value) / parseInt(no_of_ppl.value);
                    tip = total_per_person  * (pcnt/100);
                    tip_amount.innerHTML = `$${tip.toFixed(2)}`;
                    total.innerHTML = `$${total_per_person.toFixed(2)}`; 
                    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
                    reset.style.color = "hsl(183, 100%, 15%)";
                }
            }
        }

    })

    // reset button
    reset.addEventListener("click", ()=>{
        // removes the values from the variables
        tip_amount.innerHTML = "$0.00";
        total.innerHTML = "$0.00"; 
        pcnt="";
        total_per_person = "";
        tip = "";
        
        // empties the input fields
        custom.value = "";
        bill.value="";
        no_of_ppl.value="";

        // gives the reset button its original color
        reset.style.backgroundColor = "";
        reset.style.color = "";

        // gives the tip buttons their original color
        tps.forEach((element, index) => {
            element.style.backgroundColor = "";
            element.style.color = "";
        })
    })
                
    
})();
