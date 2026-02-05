
import Header from '../home/Header';
import Footer from '../home/Footer';
import logo from '../assets/banner/admissionNew.jpg';
import bgImage from '../assets/banner/bgimage1.jpeg';
function Principal() {
    return (
        <div className="App" style={{backgroundColor:'rgba(249, 177, 177, 0.62)'}}>
            <Header />
            {/* <img src={logo} loading="eager" alt="Image" 
            style={{width:'100%',opacity:'0.2',display:'block',position:'absolute'}}
            //style="width: 100%; margin: auto; display: block; position: absolute; inset: 0px; padding: inherit; object-fit: cover; opacity: 0; aspect-ratio: 9 / 4;"
            ></img> */}
            {/* <img src={bgImage} loading="eager" alt="Image" 
            style={{width:'100%',height:'180%',opacity:'0.4',display:'block',position:'absolute'}}
            ></img> */}

            <div className="container mt-3" style={{color:'#000'}}>
        <h1 className="text-center">&nbsp;</h1>
        <h3>Age limit for admissions are as follows:</h3>
        <ul>
            <li>Pre KG - should be completed 3 and half years by 31st March</li>
            <li>LKG - should be completed 4 years by 31st March</li>
            <li>UKG - should be completed 5 years by 31st March</li>
            <li>Std I - should be completed 6 years by 31st March</li>
        </ul>
        <h3>Admission Process</h3>
        <ol>
            <li>Application for admission must be made in the prescribed form available in the school office and should be signed by the parent or guardian.</li>
            <li>Cost of Application Form is Rs. 300/-</li>
            <li>Management holds the right to say on what condition it will admit or retain in the school.</li>
            <li>A child who joins fresh from home has to produce an official birth certificate in support of the date of birth entered in the admission form. At no time and under no circumstances will any request for a change in the date of birth be entertained.</li>
            <li>Students who have attended any other recognized school must produce a transfer certificate from that school.</li>
            <li>Documents submitted for admission will not be returned.</li>
            <li>Students are originally admitted only at the session in April & May.</li>
            <li>No admission is made until the student has passed a test in general aptitude in essential class subjects.</li>
            <li>No candidate will be admitted without an interview.</li>
            <li>The following documents should be submitted along with the application form:
                <ul>
                    <li>Xerox copy of Birth Certificate</li>
                    <li>Xerox copy of Community Certificate</li>
                    <li>Xerox copy of Adhar Card</li>
                    <li>Original Transfer Certificate</li>
                    <li>Passport Size Photo</li>
                </ul>
            </li>
        </ol>

        <h3>Promotion</h3>
        <ol>
            <li>Promotion is granted on the basis of the quality of regular and satisfactory work done during the whole year. Hence regularity in attendance, test examination and all-round performance is required.</li>
            <li>The Principal is the final judge of the student’s fitness for promotion to the next class.</li>
            <li>Pupils absent from an Examination for any reason are not Re-examined.</li>
        </ol>

        <h3>Withdrawal</h3>
        <ol>
            <li>A month’s earlier notice is to be given before the withdrawal of the student from the school. Notice of the withdrawal should be given in writing to the school office by the <strong>parent / guardian</strong> and not by student’s friends or servants.</li>
            <li><strong>The application form </strong>for the T.C / School Leaving Certificate will be issued three days after receiving the notice of withdrawal.</li>
            <li>No Transfer Certificate will be issued <strong>until all the dues are paid.</strong></li>
            <li>Any student who is unable to follow classes due to malpractices in connection with tests and examinations will be punished.</li>
            <li>Any student who is absent for more than 10 days without an application and who fails to comply with rules and regulations may be expelled permanently or removed from the school for a specified period by the Principal.</li>
        </ol>

        <h3>Fees</h3>
        <ol>
            <li>Tuition fees are charged for all the twelve months of the year.</li>
            <li>No fees will be accepted after the 15th of the month.</li>
            <li>Fees once paid will not be refunded.</li>
            <li>If all dues of fees are not cleared, progress reports as well as Final Examination Result will be held.</li>
        </ol>
        <br/><br/>
    </div>
            <Footer />
            </div>
            );
}

            export default Principal;