
import React,{useEffect, useState} from "react";
import Header from '../home/Header';
import Footer from '../home/Footer';
const Video = () => {

    return(
    <>
        <Header />
        <div style={{ display: 'grid', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
            <h3 style={{textAlign:'center'}}><u>School Inspection Video</u></h3>
            <iframe
                style={{margin: '20px auto', display: 'block'}}
                width="90%"
                height="500"
                src="https://www.youtube.com/embed/1iv3jqDLmco"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <Footer />
    </>
)
}
export default Video;