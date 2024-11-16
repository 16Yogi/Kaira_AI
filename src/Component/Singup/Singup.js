import React from 'react'
import './Singup.scss'

export default function Singup() {
  return (
    <>
    <div className="container-fluid" id='singup-form'>
        <div className="container">
          <div class="login-page">
            <div class="form">
              <form class="login-form">
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button className='btn-info'>create</button>
                <p class="message">
                  Already registered? <a href="/login" className='text-info'>Sign In</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
