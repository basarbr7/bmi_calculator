let gender = document.querySelector(".gender");
let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let weight_error = document.querySelector(".Weight_error");
let height_error = document.querySelector(".height_error");
let calculate = document.querySelector(".calculate");
let result = document.querySelector(".result");
let suggest = document.querySelector(".suggest");
// let regex = /^[A-Za-z\s]+$/;



function validation(){

    suggest.innerHTML = "";
    result.innerHTML = "";

    if (weight.value === "") {
        weight_error.innerHTML = "This field is required..";
        weight.focus();
        return false;
    }
    // else if (regex.test(weight.value)) {
    //     weight_error.innerHTML = "Enter Number";
    //     return false;
    // }    
    else if (isNaN(weight.value)) {
        weight_error.innerHTML = "Enter Valid Number";
        return false;
    }
    else{
        weight_error.innerHTML = "";
    }


    if (height.value === "") {
        height_error.innerHTML = "This field is required..";
        height.focus();
        return false;
    }
    // else if (regex.test(height.value)) {
    //     height_error.innerHTML = "Enter Number";
    //     return false;
    // }    
    else if (isNaN(height.value)) {
        height_error.innerHTML = "Enter Valid Number";
        return false;
    }
    else{
        height_error.innerHTML = "";
    }

    return true;
}

weight.addEventListener("input", function () {
    if (weight.value !== "") {
        weight_error.innerHTML = "";
    }
    
});

height.addEventListener("input", function () {
    if (height.value !== "") {
        height_error.innerHTML = "";
    }
});




function forMale(total){
    if(total < 18.4){
        suggest.innerHTML = "Underweight";
        suggest.style.color = "#FF8000";
    }
    else if(total>=18.4 && total<25){
        suggest.innerHTML = "Normal";
        suggest.style.color = "#347928";

    }
    else if(total>=25 && total<30){
        suggest.innerHTML = "Overweight";
        suggest.style.color = "#FF6500";
    }
    else{
        suggest.innerHTML = "Obesy";
        suggest.style.color = "#ff1005";
    }
    weight.value = "";
    height.value ="";
}

function forFemale(a){
    if(a < 18){
        suggest.innerHTML = "Underweight";
    }
    else if(a>=18 && a<24){
        suggest.innerHTML = "Normal";
    }
    else if(a>=24 && a<=28){
        suggest.innerHTML = "Overweight";
    }
    else{
        suggest.innerHTML = "Obesy";
    }

    weight.value = "";
    height.value ="";
}


function sum(){

    if(weight.value !== "" && height.value !== ""){
        let bmi = (weight.value) / (height.value*0.0254)**2;
        let genderType = gender.value;

        let total_p = bmi.toFixed(2);

        result.innerHTML = `${total_p}`;


        if(genderType === "male"){
            forMale(total_p);  
        }
        else if(genderType === "female"){
            forFemale(total_p);
        }    

    }
}


calculate.addEventListener("click", function () {
    
    let isValidateSuccessfull = validation();
    if(isValidateSuccessfull === false) return;


    if(gender.value === "male"){
        sum();
    }
    else if(gender.value === "female"){
        sum();
    }
});







