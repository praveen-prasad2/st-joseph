import React from "react";
import Header from '../home/Header';
import Footer from '../home/Footer';
import SmcImg from './smcImg.png';


const SaftyCommittee = () => {
    return (
       <> <Header />
       <ul style= {{display:'grid', justifyContent:'center', fontWeight: 'bold', listStyleType: 'none', backgroundColor: "rgba(249, 177, 177, 0.62)", padding: '20px' }}> 
            <h3> </h3>
            <li style={{fontSize:'20px' }}>Fr. Joseph James</li>
            <li style={{fontSize:'20px' }}>Mr. M. Thiruneelakandan</li>
            <li style={{fontSize:'20px' }}>Mr. A. Manikandan</li>
            <li style={{fontSize:'20px' }}>Miss. M. Kavitha</li>
            <li style={{fontSize:'20px' }}>Mrs. M. Rahmath Begam</li>
        </ul>
        <Footer /></>
    )

}
export default SaftyCommittee;