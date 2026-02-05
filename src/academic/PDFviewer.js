
import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import SubjectPDF from './file/BOOKLIST.pdf';
import Dcfile from './file/TC_MODEL.pdf'
import Calender from './file/ACADEMIC_CALENDER.pdf'

const PDFviewer = () => {
    const location = useLocation();
    const [file, setFile] = useState(Dcfile);
    useEffect(() => {
        if (location.pathname == '/academic/3') {
            setFile(SubjectPDF);
        } else if (location.pathname == '/academic/4') {
            setFile(Dcfile);
        } else if (location.pathname == '/academic/5'){
            setFile(Calender);
        }
        window.scrollTo(0, 0);
    },[location.pathname])

    return(
    <>
        <div style={{ display: 'grid', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
            <iframe
                style={{ display: 'block' }}
                width="100%"
                height={'900px'}
                src={file}
                title="PDF Viewer"
                //allowFullScreen
            ></iframe>
        </div>
    </>
)
}
export default PDFviewer;