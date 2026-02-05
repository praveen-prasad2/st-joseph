import './sliderstyle.css';
import slider1 from '../assets/img/slider/slider1.jpg';
import slider2 from '../assets/img/slider/slider2.jpg';
import slider3 from '../assets/img/slider/slider3.jpg';
import shoolView from '../assets/img/slider/ShoolFrontview.jpg';
import schoolGround from '../assets/img/slider/playGroundView.jpeg';

function Slider() {

  return (
    <div>
        <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators" style={{marginBottom:'-32px'}}>
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          <li data-target="#carousel" data-slide-to="3"></li>
          <li data-target="#carousel" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
        <div className="carousel-item active" style={{backgroundImage: `url(${shoolView})`, backgroundSize: 'cover'}}>
            <div className="caption">
              {/* <!--<h1>Create and share your whatever</h1>--> */}
              {/* <h1>Education is the key to unlocking the world, a passport to freedom.</h1> */}
            </div>
          </div>

          <div className="carousel-item" style={{backgroundImage: `url(${schoolGround})`, backgroundSize: 'cover'}}>
            <div className="caption">
              {/* <!--<h1>Create and share your whatever</h1>--> */}
              {/* <h1>Education is the key to unlocking the world, a passport to freedom.</h1> */}
            </div>
          </div>
         
          
          <div className="carousel-item" style={{backgroundImage: `url(${slider1})`, backgroundSize: 'cover'}}>
            <div className="caption">
              {/* <!--<h1>Create and share your whatever</h1>--> */}
              <h1>Education is the key to unlocking the world, a passport to freedom.</h1>
            </div>
          </div>

          <div className="carousel-item" style={{backgroundImage: `url(${slider2})`, backgroundSize: 'cover'}}>
            <div className="caption">
              <h1>Teachers
plant
if the seeds of it <br/>
“knowledge
that grow
forever”
</h1>
             {/* <!-- <h2>Make it easy for you to do whatever this thing does.</h2>--> */}
            </div>
          </div>
          
          <div className="carousel-item" style={{backgroundImage: `url(${slider3})`, backgroundSize: 'cover'}}>
            <div className="caption">
              <h1>The best inheritance a parent can give
their children is a few minutes of
their time each day.</h1>
             {/* <!-- <h2>Make it easy for you to do whatever this thing does.</h2>--> */}
            </div>
          </div>

        </div>
        
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>

 
    </div>
  );
}

export default Slider;