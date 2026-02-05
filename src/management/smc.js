import React from "react";
import Header from '../home/Header';
import Footer from '../home/Footer';
import file from '../academic/file/MANAGEMENT_COMMITTEE.pdf'


const SMC = () => {
    return (
       <> <Header />
        <div style={{ display: 'grid', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
            <iframe
                style={{ display: 'block' }}
                width="100%"
                height={'900px'}
                src={file}
                title="PDF Viewer"
            ></iframe>
        </div>
        <Footer /></>
    )

}
export default SMC;