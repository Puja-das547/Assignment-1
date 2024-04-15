function oprBtn(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("opr").value;
    let ResId = document.getElementById("ResultOut");
    

    if(num1 == "" || num2 == "")
    {
        ResId.classList.remove("alert-success");
        ResId.classList.add("alert-danger");
        ResId.innerHTML="Please fill inputs";
    } else{
        if(isNaN(num1) || isNaN(num2)){

            ResId.classList.remove("alert-success");
            ResId.classList.add("alert-danger");
            ResId.innerHTML="Please enter valid input";
        } else{
            if(operation == "+"){
                var result = parseFloat(num1) + parseFloat(num2);
                ResId.classList.remove("alert-danger");
                ResId.classList.add("alert-success");
                ResId.innerHTML=result;

            } else if(operation == "-")
            {
                var result = parseFloat(num1) - parseFloat(num2);
                ResId.classList.remove("alert-danger");
                ResId.classList.add("alert-success");
                ResId.innerHTML=result;
            } else if(operation == "*")
            {
                var result = parseFloat(num1) * parseFloat(num2);
                ResId.classList.remove("alert-danger");
                ResId.classList.add("alert-success");
                ResId.innerHTML=result;
            } else if(operation == "/")
            {
                if (parseFloat(num2) == 0) {
                    ResId.classList.remove("alert-success");
                    ResId.classList.add("alert-danger");
                    ResId.innerHTML="Cannot divided by zero";
                }
                else {
                    var result = parseFloat(num1) / parseFloat(num2);
                    ResId.classList.remove("alert-danger");
                    ResId.classList.add("alert-success");
                    ResId.innerHTML=result;
                }
                
            }

        }
    }
}