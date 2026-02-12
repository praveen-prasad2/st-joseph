//import oneDoc from '../../assets/files/Primary/grandupg-1.pdf';
import Header from '../../home/Header';
import Footer from '../../home/Footer';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


import './docStyle.css'


function DocOne({lookup}) {

    const docs = [
        { uri: require("../../assets/files/Primary/1 Affiliation.pdf"),
        fileName: '1. AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION', }, // Local File
      ];

  return (<>
    <Header />
    {/* <a classNameName="navbar-brand" href="/" style={{marginLeft:'15px'}}> <img src={logo} width="65" height="65" alt="logo" /></a> */}
    <a classNameName="navbar-brand" href="/mandatory" style={{color:'#fff'}}><button type="button" className="btn btn-info btn-block" >Back</button></a>
    
    <DocViewer
      documents={docs}
     // initialActiveDocument={docs[0]}
      pluginRenderers={DocViewerRenderers}
    />

   {/* <div className='videoWrapper'>     
<iframe src={oneDoc} className="responsive-iframe" style={{border:"0"}} allowfullscreen title='AFFILIATION/UPGRADATION LETTER' 
//referrerpolicy="no-referrer-when-downgrade"
></iframe>
</div> */}
<Footer/>
  
</>
    
  );
}

export default DocOne;