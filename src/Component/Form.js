import React, { useState } from 'react'
import { useFormik } from 'formik'
import {useDispatch} from 'react-redux'
import { storeForm } from '../features/FormSlice'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
// validate
import * as Yup from 'yup'

//text area
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';


//Date Picker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//mui
import { styled } from '@mui/system';
import { InputLabel,
    TextField,
    
    Typography,
    Grid,
    Box,
    Container,
    Divider,
    FormControl,
    Select,
    MenuItem,
    
    } from '@mui/material';
    import Button from "@mui/material/Button";
// import Divider from '@mui/material/Divider';

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 650px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: grey;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid rgb(196 196 196);
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
const initialValues = {
    firstName: '',
    MiddleName: '', 
    LastName: '',
    Age: '',
    Sex: '',
    Address1: '',
    Adderss2: '',
    City: '',
    State: '',
    Postal: '', 
    PhoneNumber: '',
    email: '',
    Describe: '',
    date:''
}

const validationSchema=Yup.object({
    /* PhoneNumber: Yup.string().required('Name is required')
                            .matches(/^\d{10}$/,'Invalid') */
                            email: Yup.string().trim()
                            .email("Give valid email")
                            .required("Email is required"),

})

  
const Form = () => {

   const dispatch=useDispatch()
   const navigate=useNavigate()
   

    const formik =useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values)=>{
            console.log('123',values)
            dispatch(storeForm(values));
            navigate('/formdata')
            console.log(values)
        }
    })
       console.log('initial',formik)
    const [phoneNumber, setPhoneNumber] = React.useState("");

  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-numeric characters from input
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
    // Format the phone number as (XXX) XXX - XXXX
    const regex = /^(\d{0,3})(\d{0,3})(\d{0,4})$/;
    const parts = formattedPhoneNumber.replace(regex, "($1) $2 - $3");
    return parts;
  };

  const handleChangeone = (event) => {
    const inputPhoneNumber = event.target.value;
    const formatted = formatPhoneNumber(inputPhoneNumber);
    console.log('123',inputPhoneNumber,formatted)
    if(inputPhoneNumber.length<=16){
        
    
    setPhoneNumber(formatted);
    formik.setValues({...formik.values,PhoneNumber:formatted})
    }
  };
  const [dateValue, setDateValue] = useState(null);

  const handleDate = (e) => {
    setDateValue(e);
    formik.setValues({...formik.values,date:moment(new Date(e)).format("YYYY-MM-DD")})
    

  };

  return (
    <>
    <div style={{backgroundColor:'#cbcec8',padding:"5%"}}>
    <Container  style={{backgroundColor:'#FFF',maxWidth:"750px"}}>
        <form onSubmit={formik.handleSubmit } style={{padding:'20px'}}>
        <Box sx={{  height:'auto' }} >
            <Grid container style={{alignItems:'center'}} spacing={2}>
                <Typography style={{padding:'15px',paddingTop:"40px",paddingBottom:'25px',fontWeight:'600px'}} variant="h4">
                    Interview Questionnaire
                </Typography>
                <Grid item xs={12} md={12}>

                <Divider/>
                </Grid>
                <Grid item xs={12} md={12}>

                <Typography  variant="h6">
                    Personal Information
                </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6">
                        Full Name
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <TextField
                        string={{maxWidth:'100px'}}
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        helperText="First Name"
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <TextField
                        id="MiddleName"
                        name="MiddleName"
                        onChange={formik.handleChange}
                        value={formik.values.MiddleName}
                        helperText="Middle Name"
                    />
                </Grid> 
                <Grid item xs={6} md={4}>
                    <TextField
                        id="LastName"
                        name="LastName"
                        onChange={formik.handleChange}
                        value={formik.values.LastName}
                        helperText="Last Name"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <InputLabel style={{marginBottom:'10px'}}className='label-style'>Age</InputLabel>
                    <FormControl fullWidth>
                        <TextField
                            id="Age"
                            name="Age"
                            type='number'
                            onChange={formik.handleChange}
                            value={formik.values.Age}
                            placeholder='ex:21'
                        />
                        </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                <InputLabel style={{marginBottom:'10px'}} className='label-style'>Sex</InputLabel>
                    <FormControl fullWidth>
                    
                    <Select  id="Sex"
                     name="Sex"
                     onChange={formik.handleChange}
                     value={formik.values.Sex}>
                    <MenuItem value={'Please Select'}>Please Select</MenuItem>
                       { ['Male','Female'].map((r)=>{
                       return(
                        <MenuItem value={r}>{r}</MenuItem>

                       )
                       })
                    }
                 </Select>
                        </FormControl>
                </Grid>
                </Grid>
                <Grid container style={{alignItems:'center'}} spacing={2}>
                <Typography style={{padding:'15px',marginTop:"30px"}} variant="h6">
                    Address
                </Typography>
                <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                    <TextField
                        id="Address1"
                        name='Address1'
                        onChange={formik.handleChange}
                        value={formik.values.Address1}
                        helperText="Street Address"
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                    <TextField
                        id="Adderss2"
                        name="Adderss2"
                        onChange={formik.handleChange}
                        value={formik.values.Adderss2}
                        helperText="Street Address Line 2"
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl fullWidth>
                    <TextField
                        id="City"
                        name="City"
                        onChange={formik.handleChange}
                        value={formik.values.City}
                        helperText="City"
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl fullWidth>
                    <TextField
                        id="State"
                        name="State"
                        onChange={formik.handleChange}
                        value={formik.values.State}
                        helperText="State/Provience"
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                    <TextField
                        id="Postal"
                        name="Postal"
                        onChange={formik.handleChange}
                        value={formik.values.Postal}
                        helperText="Postal/Zip Code"
                    />
                    </FormControl>
                </Grid>  
                <Grid item xs={6} md={6}>
                <InputLabel style={{marginBottom:'10px'}} className='label-style'>Phone number</InputLabel>
                    <FormControl fullWidth>
                    
                    <TextField
                    id='PhoneNumber'
                    name='PhoneNumber'
                    variant="outlined"
                    onChange={handleChangeone}
                    value={phoneNumber}
                    placeholder="(XXX) XXX - XXXX"
      />
                        </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                <InputLabel style={{marginBottom:'10px'}} className='label-style'>Email</InputLabel>
                    <FormControl fullWidth>
                    
                        <TextField
                            id="email"
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}  
                            type='email'       
                        />
                        </FormControl>
                </Grid>
                <Typography style={{padding:'15px',marginTop:"30px"}} variant="h5">
                    Question and Details
                </Typography>
                <Grid item xs={12} md={12}>
                <InputLabel style={{marginBottom:'10px'}}className='label-style' >Describe Yourself in Few Words</InputLabel>
                    <FormControl fullWidth>
                        <Textarea
                            id='Describe'
                            name='Describe'
                            onChange={formik.handleChange}
                            value={formik.values.Describe}
                                style={{width:'700px',height:"200px",borderColor:"#c4c4c4"}}
                                />
                        </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                <InputLabel style={{marginBottom:'10px'}} className='label-style'>Date</InputLabel>
                    <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            id="date"
                            name='date'
                            onChange={handleDate}
                            value={dateValue}  
                            
                        />
                        </LocalizationProvider>
                        </FormControl>
                </Grid> 
                
            </Grid>
            <Grid item xs={12} md={12} style={{padding:'20px'}} >

                <Divider/>
                </Grid>
            <Grid item xs={12} md={12}>
            <Box style={{textAlign:'center',padding:'15px'}}>
            <FormControl>
                <Button style={{backgroundColor:'#18bd5b',color:'#FFF',marginTop:"5px",width:'200px',height:'50px'}} size="medium" type='submit'>
                             
                             Submit
                           
                         </Button>
                </FormControl>
                </Box>
                </Grid>
        </Box>
       
        </form>
    </Container>
    </div>
    </>
  )
}

export default Form
