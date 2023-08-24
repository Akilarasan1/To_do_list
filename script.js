const inputBox=document.getElementById('input-box');
const listcontainer=document.getElementById('listcontainer');
function addTask(){
    if(inputBox.value==''){
        alert('you must write something!');
    }
    else{
        let li =document.createdElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
    }
}