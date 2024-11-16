import React, { useEffect } from 'react'
import './Banner.scss'
import robo from '../../Image/3.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['Hi! My name is Kaira...','How can I help you...'];

export default function Banner() {
    useEffect(()=>{
        AOS.init();
    },[]);

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    
  return (
    <>
        <div className="container-fluid pt-5" id="banner-cf">
            <div className="container pt-3" id='banner-c'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                
                    {/* <div className="col-lg-6 col-md-6 col-sm-12 px-0" data-aos="fade-right"> */}
                        <ScrollContainer>
                            <ScrollPage>
                                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                                    <img src={robo} alt="" className='p-0 m-0'/>
                                </Animator>
                            </ScrollPage>
                        </ScrollContainer>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>
                        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}!</TextTransition>
                        </h2>
                        <p>Kaira is an AI designed to assist, learn, and engage users, providing helpful insights and enhancing everyday interactions effortlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
