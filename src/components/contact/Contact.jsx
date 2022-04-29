
import './contact.css'

import React, { useRef, useState} from 'react'
import phone from '../../assets/images/phone.png'
import email from '../../assets/images/email.png'
import add from '../../assets/images/address.png'
import emailjs from "emailjs-com";


const Contact = () => {
const formRef = useRef();
const [done, setDone] = useState(false)
const handleSubmit =(e)=>{
e.preventDefault();

emailjs.sendForm('service_j99sfmh', 'template_cuwra92', formRef.current, 'YWnNGBCAljYzSKMsk')
.then((result) => {
    console.log(result.text);
    setDone(true)
}, (error) => {
    console.log(error.text);
});


}

  return (
  
        <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
        <div className="c-left">
            <div className="c-info">

                <div className="c-info-item">
                 <img src={phone} alt="" className="c-icon" />0547610315   
                </div>

                <div className="c-info-item">
                 <img src={email} alt="" className="c-icon" /> sajjadk546@gmail.com  
                </div>

                <div className="c-info-item">
                 <img src={add} alt="" className="c-icon" /> Deira Dubai
                </div>
            </div>
        </div>

        {/* from here start right coloum */}
          <div className="c-right">
           
            <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button className='btn'>Submit</button>
           <p> { done && "Email sent successfully..."}</p>
          </form>
          </div>
        </div>
        
        </div>
  
  )
}

export default Contact