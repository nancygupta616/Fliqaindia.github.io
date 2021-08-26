import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/logo.css';
import '../css/aboutus.css';
import '../css/wedding.css';

function Logo() {
    return (
        <div class="container-fluid">
            <Helmet>
            <title>Logo Design</title>
            <meta name="description" content="Make your own brand identity through us. Start your design now." />
        </Helmet>
         <div className = 'container-5'>
                <div className= 'img-title'>
                <img id = "logo-img" src ="" alt =""/> 
                    <h2 class="about-heading">LOGO DESIGN</h2>
                    
                    <p class="paragraph">
                        <span class="about-us-web">
                        Logo tells the story of your brand. It enhances your brand image and speaks to your
                        audience. Logo design makes the first impression for you in your working environment. Gives your 
                        business and brand an identity and projects a professional image. It creates memorable
                        visuals to the outside world and build loyalty.
                    </span></p>
                </div>
        </div>
        <div class="container-3">
            <button type="submit" class="logo-button design" >Start designing</button> 
             <button2 type="submit" class="logo-button quote" >Get a quote </button2>  
        </div>
      </div>
    )
}



export default Logo;