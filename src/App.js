
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
  { path: "/DOCadobe.html", element: <Mandatory/> },
  { path: "/DOClanddoc.html", element: <Mandatory/> },
  { path: "/DOCNOC.html", element: <Mandatory/> },
  { path: "/DOCRecognition.html", element: <Mandatory/> },
  { path: "/DOCBuildingStability.html", element: <Mandatory/> },
  { path: "/DOCFireSafty.html", element: <Mandatory/> },
  { path: "/DOCDEO.html", element: <Mandatory/> },
  { path: "/DOCSanitoryCert.html", element: <Mandatory/> },
  { path: "/DOCFees.html", element: <Mandatory/> },
  { path: "/DOCcbsediary.html", element: <Mandatory/> },
  { path: "/DOCResult.html", element: <Mandatory/> },
  { path: "/DOCInspectionVideo.html", element: <Mandatory/> },
  { path: "/DOCSaras.html", element: <Mandatory/> },
  { path: "/DOCPTA.html", element: <Mandatory/> },
  { path: "/DOCSMC.html", element: <Mandatory/> },
  { path: "/DOCStaffList.html", element: <Mandatory/> }
  

]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
