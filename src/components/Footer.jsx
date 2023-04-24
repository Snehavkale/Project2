import React from 'react'
import "../style/footer.scss"

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>TechyStar</h1>
            <p>@all right reserved</p>
        </div>
<br/><br/>
        <div className='one'>
            <h4>Follow Us</h4>
            <div className='link'>
                <a  href='https://www.instagram.com/accounts/login/'>Instagram</a>
                <a href='https://www.facebook.com/login/' >FaceBook</a>
                <a href='https://www.instagram.com/accounts/login/' >Github</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer