let getForm = document.querySelector('form');
let getInputField = document.querySelector('#todoInput');
let getAddBtn = document.querySelector('#todoForm button');
let getArea = document.querySelector('.task-list');


let tasks = [];

if(localStorage.getItem('todo')){
    tasks = JSON.parse(localStorage.getItem('todo'));
    displayData();
}


getForm.addEventListener('submit',function(dts){
    dts.preventDefault();
    if(getInputField.value !== ""){
        let value = getInputField.value.trim();
        tasks.push(value);
       localStorage.setItem('todo',JSON.stringify(tasks));
       displayData();
       getInputField.value = ""
    }else{
        alert('please fill the field')
    }
    

})


function displayData(){
    getArea.innerHTML = ""
    tasks.forEach(function(val,id){
     let createLi = document.createElement('li');
     createLi.innerHTML = `<div> ${val}</div> <button> Delete  </button>`;
     getArea.appendChild(createLi);
    createLi.querySelector('button').addEventListener('click',function(){
        tasks.splice(id,1);
        localStorage.setItem('todo',JSON.stringify(tasks));
        displayData()
    })     
    })
}