window.onload=function(){
    if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
        document.getElementById("intro1").className="nav-item intro";
        document.getElementById("intro2").className="nav-item";
        document.getElementById("intro3").className="nav-item";
        var ans=JSON.parse(window.localStorage.getItem("k"));
        document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
    }
    var obj=window.localStorage.getItem("k");
    var res=JSON.parse(obj);
    document.getElementById("fname+lname").innerHTML=res.fname;
    document.getElementById("fname").innerHTML=res.fname;
    // document.getElementById("lname").innerHTML=res.lname;
    document.getElementById("phone").innerHTML=res.phone;
    document.getElementById("email").innerHTML=res.email;
    document.getElementById("email2").innerHTML=res.email;
    document.getElementById("address").innerHTML=res.address;
}

function logout(){
  window.localStorage.setItem("k",1);
  document.getElementById("Intro1").className="nav-item";
  document.getElementById("intro2").className="nav-item intro-tag";
  document.getElementById("intro3").className="nav-item intro-tag";
  

}