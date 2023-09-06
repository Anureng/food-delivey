"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestaurentAdmin = () => {
  const [file, setFile] = useState<any>(null);
  const [name, setName] = useState<any>(null)
  const [description, setDescription] = useState<any>(null)
  const [time, setTime] = useState<any>(null)
  const [rating, setRating] = useState<any>(null)

  const handleSelectFile = (e:any) => setFile(e.target.files[0]);

  const notifySuccess = () => toast.success("Product created")
    const notifyError = () => toast.error("Product not created")
  const handleSubmit =(e:any) =>{

    e.preventDefault()
    const data = new FormData();
    data.append("Name",name)
    data.append("Description",description)
    data.append("Time",time)
    data.append("Rating",rating)
    data.append("photo", file);

    axios.post("https://foodapi-wqk4.onrender.com/api/getAllRestaurent/restaurent",data)
    .then((response) => {
      // Handle the response if needed
      console.log(response.data);
      notifySuccess()
    })
    .catch((error) => {
      // Handle any errors that occurred during the POST request
      console.error('Error:', error); 
      notifyError()
    });
  }

  return (
    <div className='bg-orange-600 h-screen flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex-col flex space-y-5'>
        <input className='p-2 rounded-xl' type="text" placeholder='enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input className='p-2 rounded-xl' type="text" placeholder='enter Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
        <input className='p-2 rounded-xl' type="text" placeholder='enter time' value={time} onChange={(e)=>setTime(e.target.value)} />
        <input className='p-2 rounded-xl' type="text" placeholder='enter rating' value={rating} onChange={(e)=>setRating(e.target.value)}/>
        <input
          id="file"
          type="file"
          onChange={handleSelectFile}
          multiple={false}
          />
        <button type='submit' className='bg-white px-1 py-2 rounded-xl'>Click me</button>
        <ToastContainer />
        </form>
    </div>
  )
}

export default RestaurentAdmin