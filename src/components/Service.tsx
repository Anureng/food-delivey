import axios from "axios";
import { useEffect, useState } from "react";  
  const Service = () => {

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

       const menuItems = [...new Set(food.map((val:any)=>val.Type.toLowerCase())) ]
       console.log(menuItems);
  
  const filterItem = (curcat:any) => {
    const newItem = food.filter((newVal:any) => {
      return (
    newVal.Type.toLowerCase()=== curcat
        // comparing category for displaying data
      )
    });
    setItem(newItem);
  };

  
  console.log(item)
  
    return (
      <div>{
        menuItems.map((check:any)=>(
            <button key={check._id}
            className="btn-dark  p-1 px-2 mx-5 btn fw-bold"
            onClick={() => filterItem(check)}
          >
           {check}
          </button>
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
    )
  }
  
  export default Service
