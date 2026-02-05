import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../home/Header';
import Footer from '../home/Footer';
import StaffDetail from './StaffList';
import StudentList from './StudentList';
import PDFviewer from './PDFviewer';

const Acadamic =()=>{
    const location = useLocation();
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        if(location.pathname == '/academic/1') {
            setPage(1);
        } else if(location.pathname == '/academic/2') {
            setPage(2);
        } else if(location.pathname == '/academic/3') {
            setPage(3);
        } else if(location.pathname == '/academic/4') {
            setPage(3);
        } else if(location.pathname == '/academic/5') {
            setPage(3);
        } else if(location.pathname == '/academic/6') {
            setPage(6);
        } else {
            setPage(1);
        }

        window.scrollTo(0, 0);
    }, [location.pathname]);

    
    return(
        <>
        <Header />
        {page === 1 &&<StaffDetail />}
        {page === 2 &&<StudentList />}
        {page === 3  &&<PDFviewer />}
        
        <Footer />
        </>
    )
}

export default Acadamic;