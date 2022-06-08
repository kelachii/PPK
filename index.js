const  ticketButton = document.getElementById("ticket")
ticketButton.addEventListener("click", function(){
    let database = localStorage;


let areYou = prompt("Are you a New Member : YES or NO");




let newMem = areYou;

if(newMem=="yes"){
    let name = prompt("Input Your Name","")
 
    if(name==""){
        const mustName = prompt("Must Input Your Name")
        database.setItem("name", name);
        let areOld = prompt("Biko Input Your Age,To calculate your discount","")
   let age = areOld;
   const price = 1500;
   let calculate = (price/100) 
   
   let discount
   if(age<10){
     discount = 100;
     calculate*= discount
     calculate = price - calculate
    alert(`Your Gate Fee is ₦${calculate} : FREE`)
}
    else if(age < 18 && age >=10){
         discount = 50;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate} `)
    
       
    }
    else if(age < 27 && age >=18){
         discount = 20;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 46 && age >=27){
        discount = 5;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 65 && age >=46){
         discount = 60;
        calculate*= discount
        calculate = price - calculate;
        alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age ===65){
        alert("Abeg go beer parlour")
    }

    else{
        alert("Sir/Ma please kindly leave the environment , nor be here you go take die")
    }

    document.getElementById("name").setAttribute("value", name);
    document.getElementById("amount").setAttribute("value",calculate );
    document.getElementById("discount").setAttribute("value", discount);
    
    }else{
        database.setItem("name", name);
        let areOld = prompt("Biko Input Your Age,To calculate your discount","")
   let age = areOld;
   const price = 1500;
   let calculate = (price/100) 
   let discount
   if(age<10){
     discount = 100;
     calculate*= discount
     calculate = price - calculate
    alert(`Your Gate Fee is ₦${calculate} : FREE`)
}
    else if(age < 18 && age >=10){
         discount = 50;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate} `)
    
       
    }
    else if(age < 27 && age >=18){
         discount = 20;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 46 && age >=27){
        discount = 5;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 65 && age >=46){
         discount = 60;
        calculate*= discount
        calculate = price - calculate;
        alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age ===65){
        alert("Abeg go beer parlour")
    }

    else{
        alert("Sir/Ma please kindly leave the environment , nor be here you go take die")
    }

    document.getElementById("name").setAttribute("value", name);
    document.getElementById("amount").setAttribute("value",calculate );
    document.getElementById("discount").setAttribute("value", discount);
    }
    
    
}

else{
   alert(`Hello ${database.getItem("name")} Welcome To PPK`)

   let areOld = prompt("Biko Input Your Age,To calculate your discount","")
   let age = areOld;
   const price = 1500;
   let calculate = (price/100) 
   let discount
   if(age<10){
     discount = 100;
     calculate*= discount
     calculate = price - calculate
    alert(`Your Gate Fee is ₦${calculate} : FREE`)
}
    else if(age < 18 && age >=10){
         discount = 50;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate} `)
    
       
    }
    else if(age < 27 && age >=18){
         discount = 20;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 46 && age >=27){
        discount = 5;
        calculate*= discount
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 65 && age >=46){
         discount = 60;
        calculate*= discount
        calculate = price - calculate;
        alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age ===65){
        alert("Abeg go beer parlour")
    }

    else{
        alert("Sir/Ma please kindly leave the environment , nor be here you go take die")
    }

    document.getElementById("name").setAttribute("value", database.getItem("name"));
    document.getElementById("amount").setAttribute("value",calculate );
    document.getElementById("discount").setAttribute("value", discount);
   
}

});

 let toDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
 document.getElementById("date").innerHTML=toDate;


 let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}















