import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.scss';
export default function Footer() {
  return (
    <>
        <div className="container-fluid py-5" id='footer-cf'>
            <div className="container py-2">
              <h2>Contact us</h2>
              <hr className='bg-white'/>

                <div className="row py-2">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                      <h4>Social Media</h4>
                       <ul className='px-0 py-2'>
                        <li>
                          <a href="/"><i class="fa-brands fa-youtube"></i></a>
                        </li>
                        <li>
                          <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="/"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
                        </li>
                        <li><a href="/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                       </ul>

                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12" id='form'>
                      <h4>Subscribe</h4>
                      <form action="">
                        <input type="email" className="form-control" id="email" placeholder='Email..'/>
                        <button className="btn btn-info">Submit</button>
                      </form>
                    </div>
                </div>        
            </div>
        </div> 
        <div className="container-fluid py-3" id='copyright'>
          <div className="container">
            <p className='text-center'>All Rights Reserved © - 2024 By Kaira</p>
          </div>
        </div>
        
    </>
  )
}
