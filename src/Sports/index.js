
import Header from '../home/Header';
import Footer from '../home/Footer';
import logo from '../assets/banner/sportsNew.jpg';

function Curricular() {
    return (
        <div className="App">
            <Header />
            <img src={logo} loading="eager" alt="Image" 
            style={{width:'100%',opacity:'0.2',display:'block',position:'absolute'}}
            //style="width: 100%; margin: auto; display: block; position: absolute; inset: 0px; padding: inherit; object-fit: cover; opacity: 0; aspect-ratio: 9 / 4;"
            ></img>
            <div className="container mt-3">
        <h1 className="text-center">Sports & Education</h1>
        <p className="mt-4">
        &emsp;&emsp;&emsp;&emsp;Sports help in overall physical as well as mental development of the students. While playing with each other in schools, it inbuilds a sense of team spirit, leadership, self-esteem, self-confidence, and friendliness among the children. Games & Sports undergo positive mentoring among children.
        </p>
        {/* <h2 classNames="mt-4">St. Joseph Public School</h2> */}
        <br/>
        <p style={{fontSize:'13pt'}}>
           <strong> St. Joseph Public School</strong> promotes sports to the leaps and bounds. To train its students in the fields of sports, HMS provides Special Coaching for Outdoor games such as:
        </p>
        <br/>
        <ul>
            <li>Cricket</li>
            <li>Football</li>
            <li>Volley Ball</li>
            <li>Badminton</li>
            <li>Kho-Kho</li>
            <li>Basket Ball</li>
        </ul>
        <br/>
        <br/><br/>
    </div>

            <Footer />
            </div>
            );
}

            export default Curricular;