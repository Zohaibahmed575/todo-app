import { useState } from "react";
import TodoItem from "./TodoItem"
import { SiOneplus } from "react-icons/si";
import { PiEmptyBold } from "react-icons/pi";


const TodoApp = () => {
  
    
 const [todoitems, settodoitems] = useState([])

 const [newtodo, setnewtodo] = useState("")
  
  

 const addtodo = () => {

    const mynewtodo = {
        id: new Date().getTime(),
        title: newtodo,
        completed: false,
    }

    settodoitems([mynewtodo, ...todoitems])
    setnewtodo("")

 }

 const markedCompleted = (todoId) =>{

    const editedArr = todoitems.map((item) => {
        if (item.id === todoId) {
          return {
            id: item.id,
            title: item.title,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
      settodoitems(editedArr);


 }

 const deleteThisTodo = (todoId) => {
    const filteredArray = todoitems.filter((item) => item.id != todoId);
    settodoitems(filteredArray);
  };

  
const update = (todotitle, todoId) =>{

 

const updateArr = todoitems.map((item) => {
        if (item.id == todoId) {
          return {
            id: item.id,
            title: todotitle,
            completed: item.completed,
          };
        } else {
          return item;
        }
      });
      settodoitems(updateArr);

}

  
    return (
      <div className=" px-2  h-[100vh]" >

    <div className="flex items-center justify-center h-[50vh]">
<div className=" bg-[#111111c4] rounded-2xl border-[grey]-2px md:w-[50vw] not-xl:w-full m-auto text-white p-5">
      
<h1 className="font-bold text-6xl text-center mb-10">Task To-Do</h1>

<div className="flex gap-3 items-center pt-1">
<input value={newtodo} onChange={(e) => {setnewtodo(e.target.value)}} className="w-full h-12 bg-amber-50 rounded-[10px] text-black px-3" type="text" placeholder="Add Task..." />
{newtodo.length > 2 ? <SiOneplus size={50} color="white" className="cursor-pointer " onClick={addtodo} /> : <PiEmptyBold size={50} color="white"  />}
</div>

<div className=" pt-5 flex flex-col gap-3">
    
  {
    todoitems.map((item, index)=>(
        <TodoItem 
        todoitem = {item} key={index} markedCompleted = {markedCompleted} deleteThisTodo = {deleteThisTodo} update = {update}
        />
    ))
  }
</div>

</div>



    </div>

    </div>
  )
}

export default TodoApp