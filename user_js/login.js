
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container");
      
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
      
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
      
          

window.onload=function(){
    localStorage.setItem("k",1);
  }
  

  

  function addlocal(){
    if(localStorage.getItem("usd")==null){
      localStorage.setItem("usd",JSON.stringify([]))
    }
    var usda=JSON.parse(localStorage.getItem("usd"));
    var fname=document.getElementById("fname").value;
    // var lname=document.getElementById("lname").value;
    var email=document.getElementById("user_email").value;
    // var username=document.getElementById("user_name").value;
    var phone=document.getElementById("phone").value;
    var password=document.getElementById("password").value;
    var address=document.getElementById("address").value;
    var obj={
      fname:fname,
      // lname:lname,
      email:email,
      // username:username,
      phone:phone,
      address:address,
      password:password
    }
    usda.push(obj);

  

    // var dat=JSON.stringify(usd);
    // window.localStorage.setItem(email,dat);
    window.localStorage.setItem("usd",JSON.stringify(usda));
    
    // window.localStorage.setItem("log",);

     window.alert("sign Up Successful");
    var jobj=JSON.stringify(obj);
    window.localStorage.setItem(email,jobj);
    window.localStorage.setItem("k",window.localStorage.getItem(email));
    
    window.location.href="index.html";
  }

  
  function validate(){
            
    var user=document.getElementById("user_login").value;
    var password=document.getElementById("user_pass2").value;
    if(window.localStorage.getItem(user)!==null){
      var obj=JSON.parse(window.localStorage.getItem(user));
      if(obj.password==password){

      
      // alert(100);
      window.localStorage.setItem("k",window.localStorage.getItem(user));
      window.location.href="index.html";
      }
      else{
        alert("wrong pasword");
      }
    }
    else{
      alert("Not Registered!plese signup...")
    }
  }



