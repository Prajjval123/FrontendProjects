import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from 'react-icons/ai'


const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
            <h1>Home</h1>
            <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
          I will understand each concept theoretically asIll as practically. After understanding the concepts, I will create projects and do fun challenges.So make sure to connect to me via linkedin.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>Who I am?</h1>
          <p>
            I am a web developer with a good knowlede in React and Javascript. I can develop dynamic webpages for your business. The websites will be attractive and device responsive</p>
        </div>
      </div>
      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: '0.2s'
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: '0.4s'
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: '1s'
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home