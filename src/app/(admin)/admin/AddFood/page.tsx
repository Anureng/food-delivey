import CreateProduct from '@/components/CreateProduct'
import UpdateFood from '@/components/UpdateFood'
import React,{useState} from 'react'

const page = () => {
 
  return (
    <div>
      <UpdateFood/>
      <CreateProduct/>
    </div>
  )
}

export default page