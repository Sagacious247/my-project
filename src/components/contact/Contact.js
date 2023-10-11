import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
    <section className='contactSection'>
            <h2>Get In Touch With Us</h2>
        <div className='contactInfo'>

            <div className='contactForm'>
              <form>
                <p>For more information or to schedule service, call us at +234-070-670-057-59 or 
                    fill out the form below to <br/> contact us.
                </p>
                <div className='inputContent' >
                <label>Name</label>
                <input className='input' type='text' placeholder='Name'/>
                </div>
                <div className='input' >
                <label>Name</label>
                <input className='input' type='text' placeholder='Phone'/>
                </div>
                <div className='input' >
                <label>Email</label>
                <input className='input' type='email' placeholder='Email'/>
                </div>
                <div className='input' >
                <label>Name</label>
                <input className='input' type='text' placeholder='Name'/>
                </div>
                <div className='input'>
                    <label>Message</label>
                    <textarea className='input' cols="40" rows="5"/>
                </div>
                <button className='submitBtn'>Submit</button>
              </form>
            </div>
        </div>
    </section>

   
    </>
  )
}

export default Contact