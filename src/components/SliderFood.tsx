"use client"
import { BsSearch } from 'react-icons/bs';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import React,{useEffect, useState} from 'react'
import axios from 'axios';


interface IAFood{
    Name: string;
      Category:string,
      Type:string,
      Price:number,
      Rating:number,
      Image:string
    }
const SliderFood = () => {
  const [filterData, setFilterData] = useState<any>('')

  const [data, setData] = useState<any>([])
    useEffect(() => {
      axios.get('https://foodapi-wqk4.onrender.com/api/allProducts')
      .then((response)=>{
        console.log(response.data);
        setData(response.data.allProduct);
      })
      .catch((error)=>{
        console.error('Error:', error);
      })
    }, [])


  
    

      // const [visibleResult, setVisibleResult] = useState<any>(data.slice(0,ITEM_PER_PAGE)) 

      // console.log(visibleResult);
      // const pagination = usePagination({
      //   total:Math.ceil(data.length / ITEM_PER_PAGE),
      //   initialPage:1,
      //  onChange(page){
      //   const start =(page-1) * ITEM_PER_PAGE
      //   const end =start + ITEM_PER_PAGE  
      //   setVisibleResult(data.slice(start,end))
      //  }
      // })
      const {data: session} = useSession()
  return (
    <>
    
     {/* navbar  */}

     <div className='flex items-center justify-evenly border border-gray-200 p-4 ' >
        <div className='flex space-x-7 items-center'>
            <p className='text-2xl font bold'>ZOMATO</p>
            <div className='flex items-center space-x-2 border border-gray-200 rounded-xl p-2'>
            <BsSearch/>
            <input type="text"  value={filterData} onChange={(e)=>setFilterData(e.target.value.toLowerCase())}  className='outline-none ' placeholder='Search For Food Name' />
            </div>
        </div>
        <div className='flex space-x-5 text-lg'>
        {
        session?.user ?(
          <>
          <p>{session.user.name}</p>
          <Image className='rounded-lg' src={`${session.user.image}`} alt="User" width={30} height={20} />
          </>
        ):(
          <button onClick={()=>signIn('google')}>Sign In</button>
          )
        }
             <button onClick={()=>signOut()}>SignOut</button>
        </div>
    </div>




    {/* Navbar end  */}
   
   
  
               <div className='flex flex-wrap space-x-5 space-y-3 p-2' >
                  
                  {data?.filter((item:any)=>{
      return filterData?.toLowerCase()==='' ? item.Category : item.Category.toLowerCase().includes(filterData);
     }) .map((datas:any)=>(
      <>
      <div className='flex flex-col border hover:shadow-xl  rounded-xl p-3 '>
        <div className='space-x-3'>
          <br />
      {/* <span> Name:-{datas.Name}</span> */}
      <br />
      <span>Category:-{datas.Category}</span>
      <br />
      <span>
        <Image src={`${datas.Image}`} alt='nothing' className='rounded-xl' width={200} height={200}/>
        </span>
      <br />
      <span>Price:-{datas.Price}</span>
      <br />
      <span>Rating:-{datas.Rating}</span>
      <br />
      <span>Type:-{datas.Type}</span>
        </div>
      </div>
      </>
   )  )}


   
   </div>

          
    </>
  )
}

export default SliderFood