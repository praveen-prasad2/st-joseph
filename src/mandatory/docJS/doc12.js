import oneDoc from '../../assets/files/Primary/PTA12.docx';
import Header from '../../home/Header';
import Footer from '../../home/Footer';


import './docStyle.css'


function DocOne() {

   

  return (<>
    <Header />
    {/* <a classNameName="navbar-brand" href="/" style={{marginLeft:'15px'}}> <img src={logo} width="65" height="65" alt="logo" /></a> */}
    <a classNameName="navbar-brand" href="/mandatory" style={{color:'#fff'}}><button type="button" className="btn btn-info btn-block" >Back</button></a>
   <div className='videoWrapper'>     
<iframe src={oneDoc} className="responsive-iframe" style={{border:"0"}} allowfullscreen title='AFFILIATION/UPGRADATION LETTER' loading="lazy" 
//referrerpolicy="no-referrer-when-downgrade"
></iframe>
</div>
<Footer/>
  
</>
    
  );
}

export default DocOne;