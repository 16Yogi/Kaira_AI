import React from 'react'
import './Chatarea.scss'
import Webcam from "react-webcam";

export default function Chatarea() {
  return (
    <>
        <div className="container-fluid py-3" id='chat-cf'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="col" id='camera'>
                            <Webcam id="camera" className='p-0 m-0'/>
                        </div>
                        <div className="col py-2 history mt-3">
                            <div className="his-item">
                                <p>Lorem ipsum dolor sit amet 
                                   {/* <i class="fa-solid fa-x"></i> */}
                                </p>
                            </div>
                            <div className="his-item">
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="his-item">
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="his-item">
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="his-item">
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="his-item">
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12" id='chat-area'>
                        <div className="col py-3 chatshow">
                            <div className='col py-2' id="qna">
                                <p>Lorem ipsum dolor sit amet ?</p>
                            </div>
                            <div className='col py-2' id="ans">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint voluptate dolorem, esse culpa soluta.</p>
                                <i class="fa-regular fa-copy text-success px-2"></i>
                                <i class="fa-solid fa-file text-warning px-2"></i>
                            </div>
                            <div className='col py-2' id="qna">
                                <p>Lorem ipsum dolor sit amet ?</p>
                            </div>
                            <div className='col py-2' id="ans">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint voluptate dolorem, esse culpa soluta.</p>
                                <i class="fa-regular fa-copy text-success px-2"></i>
                                <i class="fa-solid fa-file text-warning px-2"></i>
                            </div>
                            <div className='col py-2' id="qna">
                                <p>Lorem ipsum dolor sit amet ?</p>
                            </div>
                            <div className='col py-2' id="ans">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint voluptate dolorem, esse culpa soluta.</p>
                                <i class="fa-regular fa-copy text-success px-2"></i>
                                <i class="fa-solid fa-file text-warning px-2"></i>
                            </div>
                            <div className='col py-2' id="qna">
                                <p>Lorem ipsum dolor sit amet ?</p>
                            </div>
                            <div className='col py-2' id="ans">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint voluptate dolorem, esse culpa soluta.</p>
                                <i class="fa-regular fa-copy text-success px-2"></i>
                                <i class="fa-solid fa-file text-warning px-2"></i>
                            </div>
                        </div>
                        <div className="prompt mt-3 p-2">
                            <input type="text" placeholder='How can I help you...'/>
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-solid fa-arrow-up"></i>
                        </div>
                        <div className="tools py-4 text-center">
                            <span><i class="fa-solid fa-file-lines mr-2 text-warning"></i>Summarize text</span>
                            <span><i class="fa-solid fa-lightbulb mr-2 text-success"></i>Get advice</span>
                            <span><i class="fa-solid fa-hat-cowboy mr-2 text-danger"></i>Cyber Security</span>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    </>
  )
}
