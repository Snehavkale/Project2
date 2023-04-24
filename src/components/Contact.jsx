import React from 'react';
import "../style/contact.scss"

const Contact = () => {
  return (
    <div className='contact'>

      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type='text' placeholder=' Enter your Name'/>
          </div>

          <div>
            <label>Email</label>
            <input type='email' placeholder=' Enter your Email'/>
          </div>

          <div>
            <label>Message</label>
            <input type='text' placeholder=' Enter your Message'/>
          </div>

          <button>Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact