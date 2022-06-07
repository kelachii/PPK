let database = localStorage;


let areYou = prompt("Are you a New Member : YES or NO");


let newMem = areYou;

if(newMem=="yes"){
    const name = prompt("Input Your Name","")
    if(name==""){
        const mustName = prompt("Must Input Your Name")
        database.setItem("name", name);
        let areOld = prompt("Biko Input Your Age,To calculate your discount","")
   let age = areOld;
   const price = 1500;
   let calculate = (price/100) 
   if(age<10){
     calculate*= 100
    alert(`Your Gate Fee is ₦${calculate} : FREE`)
}
    else if(age < 18 && age >=10){
        calculate*= 50
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate} `)
       
    }
    else if(age < 27 && age >=18){
        calculate*= 20
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 46 && age >=27){
        calculate*= 5
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 65 && age >=46){
        calculate*= 60
        calculate = price - calculate;
        alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age ===65){
        alert("Abeg go beer parlour")
    }

    else{
        alert("Sir/Ma please kindly leave the environment , nor be here you go take die")
    }
    }else{
        database.setItem("name", name);
        let areOld = prompt("Biko Input Your Age,To calculate your discount","")
   let age = areOld;
   const price = 1500;
   let calculate = (price/100) 
   if(age<10){
     calculate*= 100
    alert(`Your Gate Fee is ₦${calculate} : FREE`)
}
    else if(age < 18 && age >=10){
        calculate*= 50
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate} `)
       
    }
    else if(age < 27 && age >=18){
        calculate*= 20
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 46 && age >=27){
        calculate*= 5
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 65 && age >=46){
        calculate*= 60
        calculate = price - calculate;
        alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age ===65){
        alert("Abeg go beer parlour")
    }

    else{
        alert("Sir/Ma please kindly leave the environment , nor be here you go take die")
    }
    }
    
    
}

else{
   alert(`Hello ${database.getItem("name")} Welcome To PPK`)

   let areOld = prompt("Biko Input Your Age,To calculate your discount","")
   let age = areOld;
   const price = 1500;
   let calculate = (price/100) 
   if(age<10){
     calculate*= 100
    alert(`Your Gate Fee is ₦${calculate} : FREE`)
}
    else if(age < 18 && age >=10){
        calculate*= 50
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate} `)
       
    }
    else if(age < 27 && age >=18){
        calculate*= 20
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 46 && age >=27){
        calculate*= 5
        calculate = price - calculate;
    alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age < 65 && age >=46){
        calculate*= 60
        calculate = price - calculate;
        alert(`Your Gate Fee is ₦${calculate}`)
    }
    else if(age ===65){
        alert("Abeg go beer parlour")
    }

    else{
        alert("Sir/Ma please kindly leave the environment , nor be here you go take die")
    }
}










