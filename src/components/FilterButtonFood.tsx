import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface IAFood {
  Category: string
  Image: string
  Price: number
  Rating: number
  Type: string
}

const FilterButtonFood = () => {
  const [food, setFood] = useState<any>([])
  const [item, setItem] = useState<any>()


   useEffect(() => {
     axios.get("https://foodapi-wqk4.onrender.com/api/allProducts")
     .then((response) => {
        console.log(response.data);
        setFood(response.data.allProduct)
     })
     .catch((err) => {
        console.log(err);
     })
    }, [])

    const allItem =async() =>{
      axios.get("https://foodapi-wqk4.onrender.com/api/allProducts")
      .then((response) => {
         console.log(response.data);
         setFood(response.data.allProduct)
      })
      .catch((err) => {
         console.log(err);
      })
    }

    const menuItems = [...new Set(food.map((val:any)=>val.Type.toLowerCase())) ]


    const filterItem = (curcat:any) => {
      const newItem = food.filter((newVal:any) => {
        return (
      newVal.Type.toLowerCase()=== curcat
          // comparing category for displaying data
        )
      });
      setItem(newItem);
    };
  
  return (
    <div className='border border-black flex '>
      <div>
        Recomendation Food
      </div>
      <div>
      <div>{
        menuItems.map((check:any)=>(
          <>
            <button key={check._id}
            className="btn-dark  p-1 px-2 mx-5 btn fw-bold"
            onClick={() => filterItem(check)}
            >
           {check}
          </button>
          <button onClick={()=>allItem()}>
            All
          </button>
            </>
        ))
        }
           <div>
            </div>
            <div>
                {item?.map((check:any)=>{
                    return (
                        <li key={check._id}>{check.Category}</li>
                    )
                })}
            </div>
         </div>
      </div>
    </div>
  )
}

export default FilterButtonFood