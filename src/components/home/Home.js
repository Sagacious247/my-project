import React from 'react'
import './home.css'
import aboutImg from '../../assets/about.jpg'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <section className='heroSection'>
        <div className='hero'>
        <div className='heroTop'>
      <h2>Trusted Commercial <br/> Electrical Panel Builder in <br/>
      Abuja, Nigeria</h2>
      <p>We have experienced engineers, specializing in electrical panel building and installations. Our friendly and professional electricians are <br/> highly trained, experienced, and skilled electrical repair exparts who maintain a couteous attitude. Clean appearance and high <br/> ingeritydemeanar that you can trust.</p>
        </div>

        <div className='heroBtnSection'>
          <NavLink to="/contact" className='heroBtn'>Contact Us</NavLink>
          <div className='heroOr'>
            <div className='line-1'/> 
            <p>Or</p>
            <div className='line-2'/>
          </div>

        <div className='heroContactInfo'>
            <span>Call Us To Get Started</span>
            <h3>070-670-057-59</h3>
        </div>
        </div>

        </div>
    </section>

    <div className='actionSection'>
      <div className='action'>
      <span>Call For Emergency Electrical Services Today! </span>
      <NavLink to="/contact" className='actionBtn'>Contact Us</NavLink>
      </div>
    </div>

    {/* About us */}
    <div className='aboutSection'>
      <div className='aboutInfo'>
        <div className='aboutInfoRight'>
        <h2>Top Rated Electricians in Abuja, Nigeria</h2>
        <p>Klem-Electric is your reliable electriacal service provider who has gained
          prominent and recognition in the city of abuja and beyone. When you need an expert in the field,
          we are always at hand with a fast response time and competitive pricing that will leave more 
          money on hand for other important business needs.
        </p>
        <button className='aboutBtn'>See More Of Our Works</button>
        </div>
        <div className='aboutInfoLeft'>
          <img src={aboutImg} alt='' />
        </div>
      </div>
    </div>

    {/* Testimonial Section */}
    <div className='testimonialSection'>
      <h1>Hear From Our Recent Clients</h1>
      <div className='testimonialdetails'>
        <div className='testimonialDetail'>
          <img src={aboutImg} alt='' />
          <h4>Sagacious Paul</h4>
          <p>It feels good working with Klem Electric. we are really satisfied with your services. top notch.
          </p>
        </div>
        <div className='testimonialDetail'>
          <img src={aboutImg} alt='' />
          <h4>Sagacious Paul</h4>
          <p>Klem was very professional and knows exactly what he is doing. 
            i explained the problem we were having with some of our electrical sockets and he handled it well.
            Thank you so much Klem Electrical.
          </p>
        </div>
        <div className='testimonialDetail'>
          <img src={aboutImg} alt='' />
          <h4>Sagacious Paul</h4>
          <p>I bought electrical panel with Klem electric and since then it has been serving us and there is no problem. 
            Thank you Klem electric for the product
          </p>
        </div>
        <div className='testimonialDetail'>
          <img src={aboutImg} alt='' />
          <h4>Sagacious Paul</h4>
          <p>Enjoyed doing business with Klem Electrical. they were prompt and complete.</p>
          They oofered solutions to the problems and changed damaged electrical parts.
          Thank you.
        </div>
      </div>
    </div>

    {/* Contact us */}
    <section className='heroContactSection'>
            <h2>Get In Touch With Us</h2>

        <div className='heroContactInfo'>
            <div className='heroContactForm'>
              <form>
                <p>For more information or to schedule service, call us at 070-670-057-59 or 
                    fill out the form below to <br/> contact us.
                </p>
                <div className='heroInputContent' >
                <label>Name</label>
                <input className='heroInput' type='text' placeholder='Name'/>
                </div>
                <div className='heroInput' >
                <label>Phone</label>
                <input className='heroInput' type='text' placeholder='Phone'/>
                </div>
                <div className='heroInput' >
                <label>Email</label>
                <input className='heroInput' type='email' placeholder='Email'/>
                </div>
               
                <div className='heroInput'>
                    <label>Message</label>
                    <textarea className='heroInput' cols="40" rows="5"/>
                </div>
                <button className='heroSubmitBtn'>Submit</button>
              </form>
            </div>

            <div className='heroGoogleForm'>
             <h4>Our Contact Information</h4>

             <div className='heroGoogleFormInfo'>
              <span>Call Us</span>
              <p>070-670-057-59</p>
           </div>
           <div className='heroGoogleFormInfo'>
              <span>Email Us</span>
              <p>programmingwithsagacious@gmail.com</p>
           </div>
           <div className='heroGoogleFormInfo'>
              <span>Address</span>
              <p>+234-070-670-057-59</p>
           </div>
           <div>
           <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.816203542652!2d7.394012377965093!3d8.989053968047054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73273a851611%3A0xd5583106acd95112!2sKlem%20Electrical%20Engineering%20Limited!5e0!3m2!1sen!2sng!4v1696976071609!5m2!1sen!2sng" 
           width="100%" 
           height="100%" 
           style={{border: 0 }}
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
           </iframe>
           </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Home