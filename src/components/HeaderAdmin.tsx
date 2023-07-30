'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const HeaderAdmin = () => {
const [dataO, setDataO] = useState<any >()

    useEffect(() => {
        axios.get('https://foodapi-wqk4.onrender.com/api/allProducts')
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
          setDataO(response.data.allProduct);
        })
        .catch((error) => {
          // Handle any errors that occurred during the POST request
          console.error('Error:', error);
        });
      }, []);

      
  return (
    <div >
      Food Section
      <div className='flex  h-screen flex-wrap space-x-5 space-y-4 items-center justify-center' >
        {dataO?.map((datas:any)=>{
          return (
            <div key={datas._id} className='flex flex-col '>
                {/* <span>{datas._id}</span> */}
                  <span>  Category :-{datas.Category}</span>
               <span>Type :-{datas.Type}</span>
               {/* <span>{datas.Image}</span> */}
               <Image src={datas.Image} alt='Nothing' width={300} height={300}/>
               <span> Price:-{datas.Price}</span>
                <span>Rating:-{datas.Rating}</span>
              </div>
            )
          })}
          </div>
    </div>
  )
}

export default HeaderAdmin