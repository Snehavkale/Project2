import React from 'react'
import "../style/home.scss";
import vg from "../asset/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Techystar</h1>
        <p> Solution to all your problems..!</p>
      </main>
    </div>
{/* home2 */}
    <div className="home2">
    <img src={vg} alt='Graphics'/>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, necessitatibus!</p>
    </div>
    </div>

{/* //home3 */}
    <div className="home3" id='about'>
      <div>
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur totam hic ipsa tempore atque, non repudiandae laudantium dignissimos, doloribus ratione. Et necessitatibus esse minima iure quia tenetur debitis corrupti vero excepturi quas ratione ducimus eveniet alias inventore at in quasi distinctio quam nulla, laboriosam dolore saepe autem magni nobis.</p>
        </div>
        {/* <img src={vg} alt='Graphics'/> */}
    </div>

    {/* home4 */}

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
       <article>
        <div style={{animationDelay: "0.3s",}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>

        <div style={{animationDelay: "0.5s",}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>

        <div style={{animationDelay: "0.7s",}}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>

        <div style={{animationDelay: "1s",}}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
       </article>
       
      </div>
    </div>
    </>
  )
};

export default Home