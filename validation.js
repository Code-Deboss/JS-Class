let btn = document.querySelector(".send");


btn.addEventListener('click',()=>{
    let pwd = document.querySelector(".Password").value;
    let info= document.querySelector('.info');
   
   
    let len = pwd.length;

    if(len===0){
     info.style.color ='red';
     info.textContent = " Please password is required";
    }else if(len < 5){
        info.style.color ='red';
        info.textContent = " password must not less than 5 characters";
    }else{
        info.style.color ='white';
        info.style.backgroundColor ='blue';
        info.style.padding='12px';
        info.textContent = "Congratulations";
        btn.disabled = "disabled";
    }

})

function showPassword(){
    let pwd = document.querySelector(".Password");
    if(pwd.type==="password"){
        pwd.type="text";
    }else{
        pwd.type="password";
    }
} 