'use client'
import Image from 'next/image'
import React, { useEffect , useState } from 'react'

import { usePagination } from '@mantine/hooks';
import Link from 'next/link';
import Footer from './Footer';
import axios from 'axios';




 interface IAFood{
  Name: string;
    Category:string,
    Type:string,
    Price:number,
    Rating:number,
    Image:string
  }

  const ITEM_PER_PAGE:any=3
const FeatureFilter = () => {

  const [filterData, setFilterData] = useState<any >('')
  const [data, setData] = useState<any | undefined>()

  useEffect(() => {
    axios.get('https://foodapi-wqk4.onrender.com/api/getAllRestaurent/allrestaurent')
    .then((response)=>{
      console.log(response.data);
      setData(response.data.restaurents);
    })
    .catch((error)=>{
      console.error('Error:', error);
    })
  }, [])
  
    // useEffect(() => {
    //    data && setData(food.map(food => food.Dosa))
    // }, [])

    const [visibleResult, setVisibleResult] = useState(data?.slice(0,ITEM_PER_PAGE)) 

    console.log(visibleResult,data?.slice(0,ITEM_PER_PAGE));
  


      const pagination = usePagination({
        total:Math.ceil(data?.length / ITEM_PER_PAGE),
        initialPage:1,
       onChange(page){
        const start =(page-1) * ITEM_PER_PAGE
        const end =start + ITEM_PER_PAGE  
        setVisibleResult(data?.slice(start,end))
       }
      })


    
    
  return (
    <div className='flex h-screen flex-col'>
        <div className='text-xl
        display-none  '>
          {/* <input type="text" value={filterData} placeholder='enter the Food' onChange={(e)=>setFilterData(e.target.value)} /> */}
            <div>
                {/* <Image src="/header.jpg" alt='Nothing' height={100} width={100}/> */}
                
            </div>
            {/* <div className='flex flex-wrap space-x-5 space-y-3' > */}
     {/* {data?.map(data =>data.Category)} */}
     {/* {data?.filter((item)=>{
      return filterData?.toLowerCase()==='' ? item.Name : item.Name.toLowerCase().includes(filterData);
     }) .map((datas)=>(
      <>
      <div className='flex flex-col border hover:shadow-xl  rounded-xl p-3 '>
        <div className='space-x-3'>
          <br />
      <span> Name:-{datas.Name}</span>
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

            </div> */}
        </div>

       

        
        <div >
          <div className='flex items-center justify-center text-xl font-bold p-2'>
          Click the Previous Button to continue 
          </div>
          <div className=' p-2 flex flex-wrap items-center justify-center space-x-4'>
       {
         visibleResult?.map((item:any)=>{
       return   (
        <>
        <div className='flex flex-col border hover:shadow-xl  rounded-xl p-3 '>
          <Link href={`/Detail/${item._id}`}>
          <div className='space-x-3'>
            <br />
        {/* <span> Name:-{item.Name}</span> */}
        <br />
        <span>Name:-{item?.Name}</span>
        <br />
        <span>
          <Image src={`${item.Image}`} alt='nothing' className='rounded-xl' width={200} height={200}/>
          </span>
        <br />
        <span>Time:-{item.Rating}</span>
        <br />
        <span>Place:-{item.Time}</span>
        <br />
        {/* <span>Type:-{item.Type}</span> */}
          </div>
  
          </Link>
        </div>
        </>
       )
      } )
    }
    </div>
<div className='space-x-4 flex mt-4 items-center justify-center'>
        <button className='border rounded-xl px-1 py-2 bg-black text-white' onClick={pagination.previous}>previous</button>
        <button className='border rounded-xl px-1 py-2 bg-black text-white' onClick={pagination.next}>Next</button>
</div>
          </div>
          <Footer/>
    </div>
  )
}

export default FeatureFilter








