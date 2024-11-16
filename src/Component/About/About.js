import React from 'react'
import './About.scss'
import image from '../../Image/9.png'
import image2 from '../../Image/10.png'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";



export default function About() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
        <div className="container-fluid py-5" id='about-cf'>
            <div className="container py-5">
                <div className="col">
                    <h2 className='text-center'>About me</h2>
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 mx-auto pt-2" id='about-img'>
                    <div className="col p-2 talk-bubble tri-right border btm-right-in" id='message'>
                        <div className="talktext">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque, labore id magni rerum earum aliquam eligendi perspiciatis ut fuga ab totam maxime voluptatem est eos error eum cupiditate laborum!</span>
                        </div>                       
                    </div>
                    <img src={image} alt=""/>
                </div>        
            </div>
        </div>
    </>
  )
}
