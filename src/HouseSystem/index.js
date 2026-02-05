
import Header from '../home/Header';
import Footer from '../home/Footer';
import logo from '../assets/img/logo.JPG';
import bgImage from '../assets/banner/bgimage1.jpeg'

function Curricular() {
    return (
        <div className="App" style={{backgroundColor:'rgba(249, 177, 177, 0.62)'}}>
            <Header />
            {/* <img src={bgImage} loading="eager" alt="Image" 
            style={{width:'100%',height:'100%',opacity:'0.4',display:'block',position:'absolute'}}
            ></img> */}
            <div className="container mt-3">
        <h1 className="text-center">HOUSE SYSTEM</h1>
        <p className="mt-4" style={{fontSize:'13pt',textAlign:'justify'}}>
        &emsp;&emsp;The house system at <strong>ST. Joseph Public School </strong> occupies a prominent position
in the field of co-curricular activities, which are organised in a healthy
competitive spirit. Each student is allocated a particular house at the time of
admission and he/she continues to stay in the same house till he/she is in the
school. The system helps the student to learn self-discipline, develop leadership
qualities, the spirit of sharing, caring and togetherness beside loyalty and
belongingness towards the institution. The House System Begins from Grade 1
onwards.   </p>
        {/* <h2 classNames="mt-4">St. Joseph Public School</h2> */}
        <br/>
        <h3>
        The school is presently divided into four houses:   </h3>
        
        <ul>
            <strong><u><>HOUSE                                    COLOUR</></u></strong><br/><br/>
            <li>RUBY ROCKET                          RED</li>
            <li>GOLDEN WARRIOR                YELLOW</li>
            <li>JUNGLE JAQUAR                    GREEN</li>
            <li>VIOLET VICTOR                       VIOLET</li>
            
        </ul>
        <br/>
        <br/>
    </div>

            <Footer />
            </div>
            );
}

            export default Curricular;