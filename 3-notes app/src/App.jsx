import React, { useState } from 'react'
const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

    const submitHandler = (e)=>{
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,details})
    settask(copyTask)
    settitle('')
    setdetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }

return (
    <div className='h-screen lg:flex bg-black text-white'>

   <form className='flex lg:w-1/2 flex-col gap-4 items-start p-10' onSubmit={function(e){
            submitHandler(e)
      }}>
               <h1 className='font-bold text-4xl'>Add notes</h1>

    <input type='text'
       placeholder='Enter Notes Heading'
       className='px-5 py-2 w-full font-medium border-2 rounded outline-none' 
       value={title}
       onChange={function(e){
        settitle(e.target.value)
       }}
       ></input>

    <textarea type='text'  placeholder='Write Details'
      className='px-5 py-2 font-medium border-2 w-full rounded h-32 outline-none'
      value={details} 
      onChange={function(e){
       setdetails(e.target.value)

      }}
      ></textarea>

    <button className='bg-white active:bg-gray-300 font-medium text-black px-5 py-2 w-full rounded outline-none'>Add notes</button>   
       </form>

    <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='h-[90%] flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto'>
         
        {task.map(function(elem, idx){
          return  <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-2xl text-black py-9 px-4 bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
            <div>
            <h3 className='font-bold leading-tight text-lg'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
            </div>
            <button onClick={(idx)=>{
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs text-white rounded font-bold'>Delete</button>
          </div>
        })}
         
        </div>
        </div> 
      
    </div>
  )
}

export default App
