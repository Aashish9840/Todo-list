const form=document.getElementById('todo-form');
const input=document.getElementById('todo-input');
const tasklist=document.getElementById('tasks');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const task_input=input.value;
    
    if (!task_input){
        alert('Please enter the task you want to do');
        return;
    }

    const todo_ele=document.createElement('div');
    todo_ele.classList.add('task');


    const todo_content_ele=document.createElement('div');
    todo_content_ele.classList.add('content');

    const todo_input_ele=document.createElement('input');
    todo_input_ele.type='text';
    todo_input_ele.classList.add('input-content')
    todo_input_ele.value=task_input;
    todo_input_ele.setAttribute('readonly','readonly');


    const todo_input_bottom=document.createElement('div');
    todo_input_bottom.classList.add("bottom")


    const todo_input_edit=document.createElement('button');
    todo_input_edit.classList.add('editbutton')
    todo_input_edit.innerHTML="Edit"

    
    const todo_input_delete=document.createElement('button');
    todo_input_delete.classList.add('deletebutton')
    todo_input_delete.innerHTML="Delete"
    input.value=""


    todo_input_edit.addEventListener('click',() =>{
        if(todo_input_edit.innerText=="Edit"){
        todo_input_ele.removeAttribute("readonly");
        todo_input_ele.focus();
        todo_input_edit.innerText="Save";
        }
        else{
            todo_input_ele.setAttribute("readonly","readonly");
            todo_input_edit.innerText="Edit";

        }
    })

    todo_input_delete.addEventListener('click',()=>{
        tasklist.removeChild(todo_ele)
    })

    todo_input_bottom.appendChild(todo_input_edit)
    todo_input_bottom.appendChild(todo_input_delete)
    todo_content_ele.appendChild(todo_input_bottom)
    todo_content_ele.appendChild(todo_input_ele)
    todo_ele.appendChild(todo_content_ele)

    tasklist.appendChild(todo_ele)

})
 