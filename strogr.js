let main= document.querySelector(".main")
let clearbtn =document.querySelector(".clear-btn");

let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    let name = event.target.username.value;
    let email = event.target.gmail.value;
    let phone = event.target.phonedetail.value;
    chackStatus=0;
    
    let userdetails= JSON.parse(localStorage.getItem("user"))??[];
    // console.log(userdetails)
   for(let v of userdetails){
        if(v.email==email || v.phone==phone){
            chackStatus=1;
            break;
        };

    }
    if(chackStatus==1){
        alert("email or phone number already Exists")
    }else{
        userdetails.push({
        'name':name,
        'email':email,
        'phone':phone
    })
    localStorage.setItem("user",JSON.stringify(userdetails))
    event.target.reset ();
    }
    
    displayshow();
    event.preventDefault();
    
})

const displayshow=()=>{
    let userdetails= JSON.parse(localStorage.getItem("user"))??[];
    // console.log(userdetails)
    let finalData='';
    userdetails.forEach((element,i) => {
      finalData+=`<div class="items">
      <span onclick="removedata(${i})">&times;</span>
      <h3>Name</h3>
      <div>${element.name}</div>
      <h3>Email</h3>
      <div>${element.email}</div>
      <h3>phone</h3>
      <div>${element.phone}</div>
    </div>`  
    });
    
    main.innerHTML=finalData;
}

const removedata =(index)=>{
    
    let userdetails= JSON.parse(localStorage.getItem("user"))??[];
    userdetails.splice(index,1);
    localStorage.setItem("user",JSON.stringify(userdetails));
    displayshow();
    

}
clearbtn.addEventListener("click",()=>{
    localStorage.clear("userdetails");
    displayshow();
})
displayshow()