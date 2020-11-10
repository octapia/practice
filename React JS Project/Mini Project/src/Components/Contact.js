import React from 'react'

import './Contact.css'
import {useForm} from 'react-hook-form'
import Map from './Map'

export default function Contact() {

const {register,handleSubmit,errors} = useForm();
const onSubmit = data => {
 const {firstname,lastname,email} = data;
  alert(`Thanks ${firstname} ${lastname}. We will connect you in ${email}. `)
}

    return (
        <>
         <h1>Contact Form with Map</h1>

        <div className="contact">  
          
            <div className="col-md-6 form">
             <form  onSubmit={handleSubmit(onSubmit)}>

                 <h2>Contact Us</h2>

                 <label > First name :  
                     <input type="text"
                            placeholder="Ex. -- Tahidur"
                            name='firstname'
                            ref={register({
                                pattern: /^[A-Za-z]+$/i,
                                maxLength:12,
                                minLength:5
                            })}/>
                    {errors.firstname &&  <><i className="fas fa-exclamation-circle"></i><span> Invalid first name !</span></>}
                 </label>

                 <label > Lastname :  
                     <input type="text"
                            placeholder="Ex. -- Rahman"
                            name='lastname'
                            ref={register({
                                pattern: /^[A-Za-z]+$/i,
                                maxLength:12,
                                minLength:5
                            })}/>
                            {errors.lastname &&  <><i className="fas fa-exclamation-circle"></i><span> Invalid last name !</span></>}
                 </label>

                 <label > Email : 
                     <input type="text"
                            placeholder="Ex. -- tahid@gmail.com"
                            name='email'
                            ref={register({
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                maxLength:28,
                                minLength:10,
                                required:true
                            })}/>
                            {errors.email &&  <><i className="fas fa-exclamation-circle"></i><span> Invalid email !</span></>}
                 </label>

                 <label > Message : 
                     <textarea name="message" 
                               cols="40" 
                               rows="7"
                               ref={register}></textarea>
                 </label>

                 <input type="submit" 
                        value="Submit" 
                        id="submit"/>

             </form>
            </div>

            <div className="col-md-6 map">
             <Map />
            </div>
       
        </div>

        </>
    )
}
