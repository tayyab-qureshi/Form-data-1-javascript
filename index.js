let email = document.getElementById("email");
let pass = document.getElementById("password");
const upd=document.getElementById("update")
const sign=document.getElementById("sign-in")
// const inputs = document.querySelector(`input`)
// console.log(inputs);
var ul = document.querySelector("ul")
let arr = [];
function getData(e) {
    var obj = {
        Email: email.value,
        Pass: pass.value,
    }

    if (email.value !== "" && pass.value !== "") {
        var z = arr.filter((ele, index) => {
            return ele.Email == email.value
        })
        if (z == '') {
            arr.push(obj)
            console.log(arr)
            email.value = ""
            pass.value = ""
        }
        else {
            alert('email already exist')
        }
    }
    printData()
     
}

// show data to dom
function printData() {
    ul.innerHTML = ""
    arr.map((ele, index) => {
        var li = document.createElement("li");
        li.innerHTML = `<div>Email:${ele.Email} </br> Password:${ele.Pass}</br>
        <button class="edit-btn"><i class="fa-solid fa-pen-to-square" onclick="handleEdit(${index})"></i></button> 
        <button class="del-btn" onclick="deleteData(${index})"><i class="fa-solid fa-trash"></i></button>
        </div>`
        ul.appendChild(li)
        li.classList.add("child")
    });
   
}

function deleteData(index){
    arr.splice(index,1)
    console.log(arr);
    printData()
}
var val = -1;
function handleEdit(index){
    val= index;
    console.log(index,"hello");
    email.value=arr[index].Email
    pass.value=arr[index].Pass
    sign.style.display="none"
    upd.style.display="block"

}

function handleUpdate(){
    console.log(val);
    arr[val].Email=email.value
    sign.style.display="block"
    upd.style.display="none"
    console.log(arr);
    printData()
    email.value = ""
    pass.value = ""

}