import React, { useState }  from 'react'
import TodoComponent from './Todo/TodoComponent'

function App() {
  const [Todo, setTodo] = React.useState({
    Title: '',
    Des: '',
    Amount: ''
  })

  const {} = React.useState({
    Title: '',
    Des: '',
   
  })

  const [Todos, setTodos] = React.useState([])
  const [selectedIndex, setSelected] = React.useState([])



  function HandleSubmit(e) {
      e.preventDefault()
      if(Todo.Title === "" || Todo.Des === "") {
        return (
          <div className='bg-red-500 p-5 text-white'>Fill all fields</div>
        )
      }
      setTodos([...Todos, Todo])
      setTodo({
        Title: '',
        Des: '',
        Amount: ''
       
      })
  }

  const handleSelection = (index) => {
    setSelected(index)
  }

  const HandleRemove = (index) => {
    const remaining = Todos.filter((item, itemIndex) => {
      return itemIndex != index

    })

    setTodos(remaining)

  }

  return (
    <>
      <div>
          <h1 className='text-[40px] font-bold text-slate-600 text-center mt-[30px]'>Transaction tracker React</h1>
          <div className='flex justify-center mt-[30px]'>
              <form onSubmit={HandleSubmit} className='w-[450px] p-[10px]'>
                <div className='mb-[10px]'>
                  <input type="text" className='focus:border-blue-400 border-2 border-solid border-slate-300 outline-0 pl-[6px] w-full pt-[10px] pb-[10px] rounded-[6px] text-slate-800' placeholder="Name" value={Todo.Title} onChange={(e)=> setTodo({...Todo, Title:e.target.value})}/>
                </div>
                <div>
                  <textarea className='focus:border-blue-400 border-2 border-solid border-slate-300 outline-0 pl-[6px] w-full pt-[10px] pb-[10px] rounded-[6px] text-slate-800' name="" id="" placeholder='Date' value={Todo.Des} onChange={(e)=> setTodo({...Todo, Des:e.target.value})}></textarea>
                </div>
                <div className='mb-[10px]'>
                  <input type="text" className='focus:border-blue-400 border-2 border-solid border-slate-300 outline-0 pl-[6px] w-full pt-[10px] pb-[10px] rounded-[6px] text-slate-800' placeholder="Amount" value={Todo.Amount} onChange={(e)=> setTodo({...Todo, Amount:e.target.value})}/>
                </div>
                <div>
                  <button className='border-2 border-solid border-slate-300 w-full pt-[20px] pb-[20px] outline-0 bg-blue-400 rounded-[6px] text-white'>Add</button>
                </div>
              </form>
          </div>
        
      </div>
      <div>
          <div className='flex justify-center mt-[40px]'>
              <div className='flex flex-row justify-center justify-between w-[600px] bg-[#212121] p-[10px] text-white'>
                  <div>
                    <p className='text-slate-500'>Check</p>
                  </div>
                  <div>
                    <p>Name</p>
                  </div>
                  <div>
                    <p>Date</p>
                  </div>
                  <div>
                    <p>Amount</p>
                  </div>
                  <div>
                    <p>Manage</p>
                  </div>
              </div>
          </div>
        {
           Todos.map((item, index)=> (
            <>
              <TodoComponent Title = {item.Title} Des = {item.Des} Amount = {item.Amount} remove = {() => HandleRemove(index)} handleSelection ={() => handleSelection(index)} selected={index === selectedIndex}/>
            </>
          ))

        }
      </div>
    </>
  )
}
  
export default App
