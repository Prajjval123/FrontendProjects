import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from 'react-icons/ai'


const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
            <h1>Tech Star</h1>
            <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
          We will understand each concept theoretically as well as practically. After understanding the concepts, we will create projects and do fun challenges.So make sure to subscribe to my channel, So you can't miss any updates.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit accusantium doloribus, fugiat laborum vitae dolor omnis recusandae fugit, suscipit molestias inventore soluta, in deleniti eligendi temporibus dolorem eos labore repudiandae.
          </p>
        </div>
      </div>
      <div className="home4" id='brands'>
        <div>
          <h1>Brand</h1>
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