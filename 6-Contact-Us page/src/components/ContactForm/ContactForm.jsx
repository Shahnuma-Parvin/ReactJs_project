import React, { useState } from 'react'
import style from "./ContactForm.module.css"
import { MdOutlineChat } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Button from '../Button/Button';

const ContactForm = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [text, settext] = useState("")

    function onSubmit(params){
        params.preventDefault();
        setname(params.target[0].value)
        setemail(params.target[1].value)
        settext(params.target[2].value)
    }

  return (
    <div className={`${style.container}`}>
        <div className={`${style.contact_form}`}>
            <div className={`${style.top_btn}`}>
                <Button text='VIA SUPPORT CHAT' icon={<MdOutlineChat fontSize='24px' />} />
                 <Button text='VIA CALL' icon={<IoMdCall fontSize='24px' />} />
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineChat fontSize='24px' />} />


        <form onSubmit={onSubmit}>
            <div className={`${style.form_control}`}>
            <label htmlFor="name">name</label>
            <input type="text" name='name' />
            </div>

            <div className={`${style.form_control}`}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name='email' />
            </div>

            <div className={`${style.form_control}`}>
            <label htmlFor="text">TEXT</label>
            <textarea name='text' rows="8" />
            </div>
           <div style={{display:'flex', justifyContent: "end"}}>
            <Button text="SUBMIT" />
           </div>
        </form>
        <div>Name: {name}, Email: {email}, Massage: {text}</div>
         </div>

         <div className={`${style.contact_image}`}>
            <img src='/images/Service 24_7-pana 1.svg' alt='contact image' />
         </div>
    </div>
  )
}

export default ContactForm
