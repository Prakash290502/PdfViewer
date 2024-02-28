import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { storeForm } from '../features/FormSlice';
import { useNavigate } from 'react-router-dom';


const DisplayData = () => {
    const formData=useSelector((state)=>state.form.formData) 
    const [upload,setUpload]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const file1change=(e)=>{
        console.log(e.target.value,e,e.target.files[0].name)

        setUpload(e.target.files[0])
    }
    const onUpload=(e)=>{
        console.log(e.target.value,e)
        dispatch(storeForm(upload))
        navigate('/pdfviewer')
        // setUpload(e.target.value)
    }
  return (
    <div style={{textAlign:'center'}}>
       <div>First Name:{formData ?.firstName}</div>
       <div>MIddle Name:{formData ?.MiddleName}</div>
       <div>Last Name:{formData ?.LastName}</div>
       <div>Age:{formData ?.Age}</div>
       <div>Sex:{formData ?.Sex}</div>
       <div>City:{formData ?.City}</div>
       <div>State:{formData ?.State}</div>
       <div>Postal:{formData ?.Postal}</div>
       <div>PhoneNumber:{formData ?.PhoneNumber}</div>
       <div>Describe:{formData ?.Describe}</div>
       <div>Date:{formData ?.date}</div>
       <div>
        <input id="pdf" name="pdf" type='file'onChange={file1change} ></input>
        <div>
                <Button onClick={onUpload} style={{backgroundColor:'#18bd5b',color:'#FFF',marginTop:"5px",width:'200px',height:'50px'}} size="medium" type='submit'>
                             
                             upload Pdf
                           
                         </Button>
                         </div>
                
        
       </div>
    </div>
  )
}

export default DisplayData