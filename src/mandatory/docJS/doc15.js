
import Header from '../../home/Header';
import Footer from '../../home/Footer';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import './docStyle.css'


function DocFifteen() {

    const docs = [
        { uri: require("../../assets/files/Primary/15  LIST OF SCHOOL MANAGEMENT COMMITTEE.pdf"),
        fileName: '15. LIST OF SCHOOL MANAGEMENT COMMITTEE', } // Local File
      ];

  return (<>
    <Header />
    <a className="navbar-brand" href="/mandatory" style={{color:'#fff'}}><button type="button" className="btn btn-info btn-block" >Back</button></a>
    
    <DocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
    />

    <Footer/>
  </>
  );
}

export default DocFifteen;
