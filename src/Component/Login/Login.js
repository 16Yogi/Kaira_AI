import React from 'react'
import './Login.scss'

export default function Login() {
  return (
    <>
    <div className="container-fluid" id='login-form'>
        <div className="container">
          <div class="login-page">
            <div class="form">
              <form class="login-form">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button className='btn-info'>login</button>
                <p class="message">
                  Not registered? <a href="/singup" className='text-info'>Create an account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
