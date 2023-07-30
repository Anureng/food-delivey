"use client"
import axios from 'axios';
import React,{useState,useEffect} from 'react'

const UpdateFood = () => {
  const [updateData, setUpdateData] = useState<any>()


  const [dataO, setDataO] = useState<any>()

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


  const handleClick = async () => {
    const response = await axios
        .patch(`https://foodapi-wqk4.onrender.com/api/getAllRestaurent/updateRestaurent/${dataO._id}`, updateData)
        .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
        console.log(response);
        console.log(response.data);
    }
};

  return (
    <div>
      {
        dataO?.map((datas:any)=>{
          return(
            <></>
            )
          })
        }
       
    </div>
  )
}

export default UpdateFood