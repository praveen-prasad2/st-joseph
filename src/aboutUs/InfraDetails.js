import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";

const InfraDetails = () => {
  const tableData = [{title: 'Area of the School Campus', measurement: '19991 Sq M'},
                     {title: 'Built up Area', measurement: '3373 Sq M'},
                     {title: 'Area of Play Ground', measurement: '17317 Sq M'},
                     {title: 'Maths Lab', measurement: '758 Sq Feet'},
                     {title: 'Computer Lab', measurement: '808 Sq Feet'},
                     {title: 'Composite Lab', measurement: '816 Sq Feet'},
                     {title: 'Biology Lab', measurement: '600 Sq Feet'},
                     {title: 'Chemistry Lab', measurement: '600 Sq Feet'},
                     {title: 'Physics Lab', measurement: '600 Sq Feet'},
                     {title: 'Library', measurement: '1351 Sq Feet'},
                     {title: 'Occupied Classrooms', measurement: '533 Sq Feet'},
                     {title: 'Vacant Classrooms', measurement: '533 Sq Feet'}];
  return (<>
  <Header />
    <div style={{ display: 'grid', justifyContent:'center', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
      <h3 style={{ textAlign: 'center' }}><u>Infrastructure Details</u></h3>
     <table border="1" cellPadding="8" style={{ marginTop: '20px',justifyContent:'center', borderCollapse: 'collapse', textAlign: 'center', fontSize: '1.2rem' }}>
     <thead >
        <tr>
          <th style={{ textAlign: 'center' }}>Details</th>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;Measurement&nbsp;&nbsp;</th>
        </tr>
      </thead>
        <tbody style={{  width: '80%', fontSize: '1.2rem'}}>
        {tableData.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>{item.measurement}</td>
          </tr>
        ))}
         
        </tbody>
      </table>
      <br/><br/>
    </div>
   <Footer /> </>);
}
export default InfraDetails;