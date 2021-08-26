import React, {Component} from 'react';
import { Helmet } from 'react-helmet';

import '../../App.scss';
import '../css/aboutus.css';
import '../css/wedding.css';

class Home extends React.Component {
    render(){
        
    return (
        <div class="container-fluid">
            <Helmet>
            <title>FliqaIndia: Photography, Videography & Graphic Design related creative
platform</title>
            <meta name="description" content="Personalised platforms for Photography, Videography with
Graphics. One of the leading platforms in the creative domain." />
        </Helmet>
             
         <div class="container-3">
          <div data-index="-3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" >
              <div>
                  <a class="vector-caro-links" tabindex="-1" href="/service/Portfolio-Shoot">
                  <div id="shop">
                      <img id="img-wed" src="https://www.fliqaindia.com/static/media/wedding-Photography.2cb144d7.webp" alt =""/>
                          <p>Wedding Photography</p>
                  </div>
                  </a>
                </div>
         </div> 
         <div data-index="2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" >
              <div>
                  <a class="vector-caro-links" tabindex="-1" href="/service/Portfolio-Shoot">
                  <div id="shop">
                      <img id="img-beach" src="https://www.fliqaindia.com/static/media/Beach-photography.b4efc55b.webp" alt =""/>
                          <p>Beach Photography</p>
                  </div>
                  </a>
                </div>
         </div>  
         <div data-index="1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" >
              <div>
                  <a class="vector-caro-links" tabindex="-1" href="/service/Portfolio-Shoot">
                  <div id="shop">
                      <img id="img-pre" src="https://www.fliqaindia.com/static/media/pre-wedding-photography.7a9ec997.webp" alt =""/>
                          <p>Pre-Wedding Shoot</p>
                  </div>
                  </a>
                </div>
         </div>  
         <div data-index="-5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" >
              <div>
                  <a class="vector-caro-links" tabindex="-1" href="/service/Portfolio-Shoot">
                  <div id="shop">
                      <img id="img-port" src="https://www.fliqaindia.com/static/media/portfolio-photography.1db97649.webp" alt =""/>
                          <p>Portfolio Shoot</p>
                  </div>
                  </a>
                </div>
         </div>  
         <div data-index="0" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" >
              <div>
                  <a class="vector-caro-links" tabindex="-1" href="/service/Portfolio-Shoot">
                  <div id="shop">
                      <img id="img-drone" src="https://www.fliqaindia.com/static/media/Drone-Photography.46fd8050.webp" alt =""/>
                          <p>Drone Service</p>
                  </div>
                  </a>
                </div>
         </div>  
         <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" >
              <div>
                  <a class="vector-caro-links" tabindex="-1" href="/service/Portfolio-Shoot">
                  <div id="shop">
                      <img id="img-graph" src="https://www.fliqaindia.com/static/media/Graphic-design.fff9f6a1.webp" alt =""/>
                          <p>Graphic Design</p>
                  </div>
                  </a>
                </div>
         </div>   
        </div>
       <div className = 'container-5'>
        <div className= 'img-title'>
            <h2 class="about-heading">About Us</h2>
            <h4 class="sub-heading"><a href="https://yourstory.com/companies/fliqaindia/amp" target="_blank"><span>FliqaIndia</span></a> for everyone</h4>
   
            <p class="paragraph">
                <span class="about-us-web">
                With this belief, we at Fliqaindia started our journey 5 years ago with the belief that everyone has the right to quality 
                photography to help them better capture and conserve their special moments. We have been appreciated and recommended by Start Up 
                India, StartUp Bengal, Imagesbazaar and Digital India for our novel initiative. We have partnered with Canvera to give you the 
                best service possible. We are also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire and so many well known event organisers.


            </span></p>
        </div>
        </div>
        </div>
    );
 }
} 

export default Home;