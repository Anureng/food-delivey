"use client"
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import NavbarAdmin from './NavbarAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {
  const [file, setFile] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [type, setType] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  const [rating, setRating] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false)
    // const [createProduct, setCreateProduct] = useState({
    //     Category:"",
    //     Type: "",
    //     Price: '',
    //     Rating:""
    // })

    // const handleChange = (event:any) => {
    //     const { name, value } = event.target;
    //    setCreateProduct({
    //       ...createProduct,
    //       [name]: value,
    //     });
    //   };


    const notifySuccess = () => toast.success("Product created")
    const notifyError = () => toast.error("Product not created")
    const notifyLoading = () => toast.loading("Kindly wait...")

      const handleSelectFile = (e:any) => setFile(e.target.files[0]);

      const handleSubmit =(e:any) =>{

        setLoading(true)
        const data = new FormData();
        data.append("photo", file);
        data.append("Category",category);
        data.append("Type",type);
        data.append("Price",price);
        data.append("Rating",rating);

        axios.post("https://foodapi-wqk4.onrender.com/api/uploadFile",data)
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
          setLoading(false)
          notifySuccess();
        })
        .catch((error) => {
          // Handle any errors that occurred during the POST request
          console.error('Error:', error);
          setLoading(false)
          notifyError();
          window.location.reload();
        });
      }


  return (
    <div >
      <NavbarAdmin/>
     {loading ? (
      <div>Loading</div>
     ) : (
       <div className='bg-orange-500 text-white' >
        <form onSubmit={handleSubmit} >
        <input className='bg-transparent border placeholder:text-white border-white rounded-xl px-1 py-2 outline-none' type="text" placeholder='Category' name="Category" value={category}  onChange={(e)=>setCategory(e.target.value)}  />
        <input className='bg-transparent border placeholder:text-white border-white rounded-xl px-1 py-2 outline-none' type="text" placeholder='Type' onChange={(e)=>setType(e.target.value)} name='Type' value={type}/>
      <br />
        <input className='bg-transparent border placeholder:text-white border-white rounded-xl px-1 py-2 outline-none' type="number" placeholder='Price' value={price} name='Price' onChange={(e)=>setPrice(e.target.value)} />
        <input className='bg-transparent border placeholder:text-white border-white rounded-xl px-1 py-2 outline-none' type="number" placeholder='Rating'  value={rating} name='Rating' onChange={(e)=>setRating(e.target.value)}/>
        <br />
        <input
          id="file"
          type="file"
          onChange={handleSelectFile}
          multiple={false}
          />
        <button type='submit'>Submit</button>
        <ToastContainer />
        </form>
        </div>
     )}  <div >
     
    
      
    </div>
    </div>
  )
}

export default CreateProduct