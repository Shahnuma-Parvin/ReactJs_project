import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';


const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)

  const getData = async ()=>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=27`)
        console.log(response.data)
        setuserData(response.data)
 }

 useEffect(function(){
  getData()
 },[index])

 let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 font-semibold -translate-x-1/2 -translate-y-1/2 '>loading...</h3>

  if(userData.length>0){
    printUserData = userData.map((elem, idx)=>{

    return <div key={idx}>
      <Card elem={elem} />
    </div>
    }) 

    }
  
    return (
    <div className='bg-black h-screen text-white overflow-auto p-4 '>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
         <button 
         className='bg-amber-400 text-sm text-black font-semibold rounded px-4 py-2 cursor-pointer active:scale-95 '
         onClick={()=>{
           if(index>1){
            setindex(index-1)
           }
          setuserData([])
         }}>prev</button>

        <h4>Page {index}</h4>
        
       <button 
        className='bg-amber-400 text-sm text-black font-semibold rounded px-4 py-2 cursor-pointer active:scale-95 '
       onClick={()=>{
            setuserData([])
            setindex(index+1)  
       }}>next</button>
      </div>
   
   
    </div>

  )


}

export default App
