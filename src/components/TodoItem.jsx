import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";


const TodoItem = ({todoitem, markedCompleted, deleteThisTodo, update}) => {

  const confirmation = () =>{

    const check = confirm("Are You Sure You Want to Delete?")

   if(check == true){
    deleteThisTodo(todoitem.id)
   }
    

  }


  const newtitle = () => {
    
    const title = prompt("Enter New Title")
    
    if(title.length > 2){
      
      update(title,todoitem.id)

    }

  }

  return (
    <div>


<div className={`flex p-2 bg-[#7070707c] items-center justify-between transition-all duration-500 rounded-[10px] border-1 ${todoitem.completed ? "shadow-[0px_0px_5px_5px_white] transition-all duration-500" : null} `}>
<h2 className="text-amber-50 font-bold text-2xl">{todoitem?.title}</h2>
<div className="flex gap-3 items-center py-0" >
  {todoitem.completed ? <IoMdCheckbox color="white" size={25} onClick={() => {markedCompleted(todoitem.id)}}/>: <MdCheckBoxOutlineBlank color="white" size={25} onClick={() => {markedCompleted(todoitem.id)}}/>}


<FaRegEdit color="white" size={24} onClick={newtitle} />
<AiTwotoneDelete color="white" size={25} onClick={confirmation} />

</div>
</div>


    </div>
  )
}

export default TodoItem