
import './gallerystyle.css'
// import lib from '../assets/img/gallery/lib.jpeg';
// import lab from '../assets/img/gallery/lab.jpeg';
// import inPlay from '../assets/img/gallery/IndoorPlayground.jpeg';
// import musicPlay from '../assets/img/gallery/musicalPlayground.jpeg';
// import bus from '../assets/img/gallery/busView.jpeg';
// import yoga from '../assets/img/gallery/yoga.jpeg';
// import silambam from '../assets/img/gallery/silambam.jpeg';
import one from '../assets/img/gallery/New/IMG_1.JPG';
import two from '../assets/img/gallery/New/IMG_2.JPG';
import three from '../assets/img/gallery/New/IMG_3.JPG';
import four from '../assets/img/gallery/New/IMG_4.JPG';
import five from '../assets/img/gallery/New/IMG_5.JPG';
import six from '../assets/img/gallery/New/IMG_6.JPG';
import seven from '../assets/img/gallery/New/IMG_7.JPG';
import eight from '../assets/img/gallery/New/IMG_8.JPG';
import nine from '../assets/img/gallery/New/IMG_9.JPG';

function CoreGallery() {
  return (
    
       
        <div class="container gallery-container">
{/* 
<h1>School Image</h1>

<p class="page-description text-center">Fluid Layout With Overlay Effect</p> */}

<div class="tz-gallery">

    <div class="row">

        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <a class="lightbox" href={one}>
                <img src={one} alt="Bridge" />
            </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <a class="lightbox" href={two}>
                <img src={two} alt="Bridge" />
            </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <a class="lightbox" href={three}>
                <img src={three} alt="Bridge" />
            </a>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <a class="lightbox" href={four}>
                <img src={four} alt="Bridge" />
            </a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <a class="lightbox" href={five}>
                <img src={five} alt="Bridge" />
            </a>
        </div> 
        <div class="col-sm-6 col-md-5 col-lg-5 col-xl-5">
        <a class="lightbox" href={six}>
                <img src={six} alt="Bridge" />
            </a>
        </div>
        <div class="col-sm-6 col-md-7 col-lg-7 col-xl-7">
        <a class="lightbox" href={seven}>
                <img src={seven} alt="Bridge" />
            </a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <a class="lightbox" href={eight}>
                <img src={eight} alt="Bridge" />
            </a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <a class="lightbox" href={nine}>
                <img src={nine} alt="Bridge" />
            </a>
        </div>

    </div>

</div>

</div>
       
  );
}

export default CoreGallery;