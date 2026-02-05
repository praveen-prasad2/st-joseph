
import Header from '../home/Header';
import Footer from '../home/Footer';
import logo from '../assets/img/logo.JPG';
import bgImage from '../assets/banner/bgimage1.jpeg'

function Club() {
    return (
        <div className="App" style={{backgroundColor:'rgba(249, 177, 177, 0.62)'}}>
            <Header />
            {/* <img src={bgImage} loading="eager" alt="Image" 
            style={{width:'100%',height:'100%',opacity:'0.4',display:'block',position:'absolute'}}
            ></img> */}
            <div className="container mt-3">
        <h1 className="text-center">Eco Club</h1>
        <p className="mt-4" style={{fontSize:'13pt',textAlign:'justify'}}>
        &emsp;&emsp;The Eco Club is dedicated to creating environmental awareness and promoting sustainable practices among students. 
        It organizes activities such as tree plantation drives, clean-up campaigns, waste segregation workshops, and water conservation programs. 
        Members actively participate in nature walks, awareness rallies, and competitions to spread the message of protecting our planet. 
        Through creative projects and innovative ideas, the club instills the values of responsibility and respect for nature. 
        By encouraging eco-friendly habits in daily life, the Eco Club helps students become champions of a greener future, fostering a deep connection with the environment and inspiring others to contribute towards a healthier planet.   </p>
        {/* <h2 classNames="mt-4">St. Joseph Public School</h2> */}
      
    </div>
      <div className="container mt-3">
        <h1 className="text-center">Youth Club</h1>
        <p className="mt-4" style={{fontSize:'13pt',textAlign:'justify'}}>
        &emsp;&emsp;The Youth Club serves as a platform for students to develop leadership qualities, teamwork skills, and social awareness. It organizes cultural programs, debates, community service activities, and skill-building workshops that encourage personal growth and confidence. The club also promotes sports, arts, and volunteering opportunities to channel the energy and creativity of youth in positive directions. By engaging in outreach programs and social initiatives, members learn empathy, responsibility, and the value of collaboration. The Youth Club aims to empower young minds to take initiative, lead by example, and contribute meaningfully to the community, preparing them to be confident and responsible citizens. </p>
    </div>
     

            <Footer />
            </div>
            );
}

            export default Club;