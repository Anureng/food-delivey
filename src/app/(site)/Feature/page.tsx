"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import food from "./food.json"
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import AllDetailImage from '@/components/AllDetailImage'
import FeatureFilter from '@/components/FeatureFilter'


interface IAFood{
  Category:string,
  Type:string,
  Price:number,
  Rating:number,
  Image:string
}
const page = () => {


  
    //Handling the input on our search bar
  

    // useEffect(() => {
    //   setData(food.AllFoods)
    // }, [])
    

   
  return (
    <div>
      {/* <button >Click</button>
      <input onChange={handleChange} type='text' placeholder='Search...'/> */}
      {/* {data?.Type}
     {data?.Price} */}
<Navbar/>
{/* <AllDetailImage/> */}
<FeatureFilter/>
     
    </div>
  )
}

export default page