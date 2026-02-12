
import Header from '../../home/Header';
import Footer from '../../home/Footer';

import './docStyle.css'


function DocTwelve() {

  return (<>
    <Header />
    <a className="navbar-brand" href="/mandatory" style={{color:'#fff'}}><button type="button" className="btn btn-info btn-block" >Back</button></a>
    
    <div style={{ display: 'grid', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)", paddingBottom: '40px' }}>
        <h3 style={{textAlign:'center', marginTop: '20px'}}><u>School Inspection Video</u></h3>
        <iframe
            style={{margin: '20px auto', display: 'block', maxWidth: '90%'}}
            width="854"
            height="480"
            src="https://www.youtube.com/embed/VF2Qbm7OIYQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>

    <Footer/>
  </>
  );
}

export default DocTwelve;
