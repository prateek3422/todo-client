import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateTodo } from '../feature/todoSlice'

const AddTodo = () => {
  const todo = useSelector((state) => state.todos)
  // console.log(todo)


    const [input, setInput] =useState('')
    const [update , setUpdate] = useState(null)


    const dispatch = useDispatch()

    const handleTodo =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    const handleUpdate = () =>{
      
    }

  return (
    <>
    <form  onSubmit={ handleTodo} className="space-x-3 mt-12">
    <input
     className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
     placeholder="Enter a Todo..."
     type="text"
     value={input}
     onChange={(e) =>setInput(e.target.value)}
     />
     
     <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
     <button onClick={ handleUpdate}className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update Todo</button>

     </form>
    </>
  )
}

export default AddTodo