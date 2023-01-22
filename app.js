const names = document.getElementById('name-input')
const password = document.getElementById('password')
const form = document.getElementById('try')

form.addEventListener('click' , () =>{
    console.log("Done")
    let messages = []
    if (names.value === '' || names.value === null){
        alert("Values can't be null")
    }
    else{
    if(password.value === "12345678" && names.value === "Priyanshu@gmail.com"){
        alert("Successfully loged in")
    }else{
        alert("Wrong input")
    }
}
})