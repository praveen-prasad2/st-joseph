import './footerstyle.css'

function Footer() {
  return (
    <footer >
    <div className="footer-top">
        <div className="container">
           
            <div className="row">
                <div className="col-lg-4">
                    
                    <h3>Our Motto</h3>
                    <p style={{fontSize:'1rem'}}>Empowering to excel</p>
                    <br/>
                    <h3>Our Vision</h3>
                    <p style={{fontSize:'1rem'}}>Cultivating Excellence <br/> For Those Who Pursue It.</p>
                </div>

                <div className="col-md-4">
                    <h4>Information</h4>
                    <ul className="address1">
                        <li><i className="fa fa-map-marker"></i>St. Joseph public school</li>
                        <li>Main road, Thenpothai - 627809</li>
                        <li><i className="fa fa-envelope"></i><a href="mailto:#">josephthenpothai@gmail.com</a></li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:9047906080">9047906080</a></li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h4>Follow us</h4>
                    <ul className="social-icon">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div className="footer-bottom" style={{height:'30px'}}>
       
                    <p className="copyright text-uppercase">Copyright © 2025 St. Joseph Public School, Thenpothai</p>
    </div>
</footer>
  );
}

export default Footer;