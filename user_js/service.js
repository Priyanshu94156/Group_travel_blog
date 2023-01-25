
    window.onload=function(){


        if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
          // alert(100);
            document.getElementById("intro1").className="nav-item intro";
            document.getElementById("intro2").className="nav-item";
            document.getElementById("intro3").className="nav-item";
            var ans=JSON.parse(window.localStorage.getItem("k"));
            document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
        }
    }
    let arr=[];
if(localStorage.getItem('services')) arr=JSON.parse(localStorage.getItem('services'))
for(let {serviceName,serviceDescription} of arr)
{
  document.querySelector('#add_more').innerHTML+=`<div id="hotel-accomodation" class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="icon flex-shrink-0"><i class="bi bi-briefcase" style="color: #f57813;"></i></div>
            <div>
              <h4 class="title"><a href="form.html">${serviceName}</a></h4>
              <p class="description">${serviceDescription}</p>
            </div>
          </div>`
}
    function logout(){
      window.localStorage.setItem("k",1);
      document.getElementById("Intro1").className="nav-item";
      document.getElementById("intro2").className="nav-item intro-tag";
      document.getElementById("intro3").className="nav-item intro-tag";
      

    }
    // window.onload=function(){

// if(window.localStorage.getItem("services")!=null && window.localStorage.getItem("services")!=1){
//   alert(100);

// }
// }
