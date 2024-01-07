import React from 'react'

const Contact = () => {
    const onhandleSubmit = (e) => {
        e.preventDefault();
        console.log('hello')
    }
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form onSubmit={onhandleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='abc' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Abc@xyz.com' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Tell us about youself' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact