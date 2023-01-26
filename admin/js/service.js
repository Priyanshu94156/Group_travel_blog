var xyz= new XMLHttpRequest(); 
get_req()

function get_req(){
    xyz.open('GET','http://localhost:3000/')
    xyz.send();
    xyz.onload=function(){
        dt=JSON.parse(xyz.responseText);
        
        console.log(dt)
    for(let i = 0; i < dt.length; i++){
    document.querySelector('#adding').innerHTML+=`<div class="col-lg-6">
    <div class="au-card m-b-30">
        <div class="au-card-inner">
            <h3 class="title-2 m-b-40">${dt[i].name}</h3>
            <p class="card-text">${dt[i].description}</p>
        </div>
    </div>`

    }
    }
}


function post_req(){
    var names = document.getElementById("service").value
    var description = document.getElementById("desc").value
    console.log(names, description)
    xyz.open("POST", 'http://localhost:3000/hero')
    xyz.setRequestHeader("Content-Type", 'application/json')
    xyz.onload = function(){
        console.log("Hello")
    }
    var data={
        "name":names,
        "description":description
    }
    data=JSON.stringify(data);
    console.log(data)
    xyz.send(data)
}

// postData()
// function postData(url = 'http://localhost:5000/hero', data = datas) {
//     const response = fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json'
//       },

//       body: JSON.stringify(data)
//     }).then(response => response.json().then(response => console.log(response)))
//   }