import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

export default function Password() {

  const formik = useFormik({
    initialValues:{
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values =>{
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">

    <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className="text-5xl text-black font-bold">Hello Again!</h4>
            <span className="py-4 text-small text-center text-gray-500">
              Explore More with Us
            </span>
          </div>
          
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avatar} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder="Password" />
              <button className={styles.btn} type="submit">Let's Go</button>
            </div>
            
            <div className="text-center py-4">
              <span className="text-black">
                Forgot Password ? <Link className="text-red-950" to="/register">Recover Now</Link>
              </span>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
