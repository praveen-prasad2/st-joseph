
import Header from '../home/Header';
import Footer from '../home/Footer';
import logo from '../assets/banner/CocurricularNew.jpg';

function Sports() {
    return (
        <div className="App">
            <Header />
            <img src={logo} loading="eager" alt="Image" 
            style={{width:'100%',opacity:'0.09',display:'block',position:'absolute'}}
            //style="width: 100%; margin: auto; display: block; position: absolute; inset: 0px; padding: inherit; object-fit: cover; opacity: 0; aspect-ratio: 9 / 4;"
            ></img>
            <div className="container mt-3">
    <h1 className="text-center">Extra curricular</h1>
    <p style={{fontSize:'15pt',textAlign:'justify'}}>&emsp;&emsp;Co-curricular activities are an essential part of school life and help in enhancing student's learning processes.</p>

    <h4>Our School Provides Activities Such As:</h4>
    <ul className="list-unstyled">
        <li><strong>Indoor Activities:</strong></li>
        <li>Science Lab Activities</li>
        <li>Library Services</li>
        <li>Creative Arts and Crafts Classes</li>
        <li>Classroom activities</li>
        <li>Chess</li>
        <li>Carrom</li>
        <li>Keyboard Playing Lessons</li>
        <li>Yoga</li>
        <li>Dance</li>
    </ul>
    <br/>
    <ul className="list-unstyled">
        <li><strong>Outdoor Activities:</strong></li>
        <li>Karate</li>
        <li>Archery</li>
        <li>Skating</li>
        <li>Silambam</li>
        <li>Taek Wondo</li>
        
    </ul>
    <br/>
</div>
<br/><br/>
            <Footer />
            </div>
            );
}

            export default Sports;