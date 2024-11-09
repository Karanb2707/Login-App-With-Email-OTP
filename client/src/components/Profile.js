import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';

export default function Profile() {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      email: '',
      mobile: '',
      address: ''
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || ''})
      console.log(values)
    }
  })

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className={`${styles.container}`}>

      <Toaster position='top-center' reverseOrder={false} ></Toaster>

      <div className={styles.glass} style={{ width: "45%", paddingTop: '3rem'}}>

        <div className="title flex flex-col items-center">
          <h4 className="text-5xl text-black font-bold">Profile</h4>
          <span className="py-3 text-small text-center text-gray-500">
            You can update this profile.
          </span>
        </div>
        
        <form className="py-1" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center py-4">
            <label htmlFor='profile'>
              <img className={styles.profile_img} src={ file || avatar} alt="avatar" />
            </label>
            <input onChange={onUpload} type='file' id='profile' name='profile'/>
          </div>

          <div className="textbox flex flex-col items-center gap-3">
            <div className='name flex w-3/2 gap-5'>
              <input {...formik.getFieldProps('firstname')} className={styles.textbox} type="text" placeholder="FirstName" />
              <input {...formik.getFieldProps('lastname')} className={styles.textbox} type="text" placeholder="LastName" />
            </div>
            
            <div className='name flex w-3/2 gap-5'>
              <input {...formik.getFieldProps('mobile')} className={styles.textbox} type="text" placeholder="Mobile" />
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder="Email*" />
            </div>

            <input {...formik.getFieldProps('address')} className={styles.textbox} type="text" placeholder="Address*" />
            <button className={styles.btn} type="submit">Update</button>
          </div>
          
          <div className="text-center py-4">
            <span className="text-black">
              Come back later? <Link className="text-red-950" to="/">Logout</Link>
            </span>
          </div>
        </form>
        
      </div>
    </div>
  );
}
