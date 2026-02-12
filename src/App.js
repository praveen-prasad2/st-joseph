
import Home from './home/Home';
import Gallery from './gallery/index';
import Yvideo from './gallery/video';
import Mandatory from './mandatory/index';
import Principal from './PrincipalDesk/index';
import AboutUS from './aboutUs/index';
import StatusAffiliation from './aboutUs/statusAffiliation';
import InfraDetails from './aboutUs/InfraDetails';
import Sports from './Sports/index';
import Curricular from './Curricular/index';
import HouseSystem from './HouseSystem/index';
import Club from './HouseSystem/Club';
import AdmissionCrit from './admissionCri/index';
import FeesStructure from './admissionCri/fees';
import Transport from './admissionCri/transport';
import SMC from './management/smc';
import SaftyCommittee from './management/saftyCommittee';
import Facilities from './facilities';
import Academic from './academic/index';
//belows are document components
import DocOne from './mandatory/docJS/doc1';
import DocTwo from './mandatory/docJS/doc2';
import DocThree from './mandatory/docJS/doc3';
import DocFour from './mandatory/docJS/doc4';
import DocFive from './mandatory/docJS/doc5';
import DocSix from './mandatory/docJS/doc6';
import DocSeven from './mandatory/docJS/doc7';
import DocEight from './mandatory/docJS/doc8';
import DocNine from './mandatory/docJS/doc9';
import DocTen from './mandatory/docJS/doc10';
import DocEleven from './mandatory/docJS/doc11';
import DocTwelve from './mandatory/docJS/doc12';
import DocThirteen from './mandatory/docJS/doc13';
import DocFourteen from './mandatory/docJS/doc14';
import DocFifteen from './mandatory/docJS/doc15';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/gallery", element: <Gallery/>},
  { path: "/yvideo", element: <Yvideo/>},
  { path: "/mandatory", element: <Mandatory/> },
  { path:"/princialNotes",element:<Principal/>},
  { path:"/aboutus",element:<AboutUS/>},
  { path:"/statusAffiliation",element:<StatusAffiliation/>},
  { path:"/infraDetails",element:<InfraDetails/>},
  { path:"/sports",element:<Sports/>},
  { path:"/curricular",element:<Curricular/>},
  { path:"/houseSystem",element:<HouseSystem/>},
  { path:"/club",element:<Club/>},
  { path:"/AdmissionNotes",element:<AdmissionCrit/>},
  { path:"/FeesStructure",element:<FeesStructure/>},
  { path:"/transport",element:<Transport/>},
  { path:"/smc",element:<SMC/>},
  { path:"/facilities",element:<Facilities/>},
  { path:"/SaftyCommittee",element:<SaftyCommittee/>},
  { path: "/academic/:id", element: <Academic/>},
  { path: "/DOCadobe.html", element: <DocOne/> },
  { path: "/DOClanddoc.html", element: <DocTwo/> },
  { path: "/DOCNOC.html", element: <DocThree/> },
  { path: "/DOCRecognition.html", element: <DocFour/> },
  { path: "/DOCBuildingStability.html", element: <DocFive/> },
  { path: "/DOCFireSafty.html", element: <DocSix/> },
  { path: "/DOCDEO.html", element: <DocSeven/> },
  { path: "/DOCSanitoryCert.html", element: <DocEight/> },
  { path: "/DOCFees.html", element: <DocNine/> },
  { path: "/DOCcbsediary.html", element: <DocTen/> },
  { path: "/DOCSMC.html", element: <DocEleven/> },
  { path: "/DOCResult.html", element: <DocEleven/> },
  { path: "/DOCInspectionVideo.html", element: <DocTwelve/> },
  { path: "/DOCSaras.html", element: <DocThirteen/> },
  { path: "/DOCPTA.html", element: <DocFourteen/> },
  { path: "/DOCSMC.html", element: <DocFifteen/> }
  

]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
