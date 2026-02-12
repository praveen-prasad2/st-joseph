
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
  { path: "/DOC-AFFILIATION-UPGRADATION-LETTER.html", element: <Mandatory/> },
  { path: "/DOC-SOCIETIES-TRUST-COMPANY-REGISTRATION.html", element: <Mandatory/> },
  { path: "/DOC-NO-OBJECTION-CERTIFICATE.html", element: <Mandatory/> },
  { path: "/DOC-RECOGNITION-CERTIFICATE.html", element: <Mandatory/> },
  { path: "/DOC-BUILDING-SAFETY-CERTIFICATE.html", element: <Mandatory/> },
  { path: "/DOC-FIRE-SAFETY-CERTIFICATE.html", element: <Mandatory/> },
  { path: "/DOC-SELF-CERTIFICATION-FOR-AFFILIATION.html", element: <Mandatory/> },
  { path: "/DOC-WATER-HEALTH-AND-SANITATION-CERTIFICATES.html", element: <Mandatory/> },
  { path: "/DOC-FEE-STRUCTURE.html", element: <Mandatory/> },
  { path: "/DOC-ANNUAL-ACADEMIC-CALENDER.html", element: <Mandatory/> },
  { path: "/DOC-LAST-THREE-YEAR-RESULT.html", element: <Mandatory/> },
  { path: "/DOC-SCHOOL-INSPECTION-VIDEO.html", element: <Mandatory/> },
  { path: "/DOC-SARAS.html", element: <Mandatory/> },
  { path: "/DOC-PARENTS-TEACHERS-ASSOCIATION-MEMBERS.html", element: <Mandatory/> },
  { path: "/DOC-SCHOOL-MANAGEMENT-COMMITTEE.html", element: <Mandatory/> },
  { path: "/DOC-STAFF-LIST.html", element: <Mandatory/> }
  

]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
