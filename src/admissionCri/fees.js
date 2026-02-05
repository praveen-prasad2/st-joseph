import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";

const InfraDetails = () => {
  const tableData = [{title: 'LKG', measurement: '27,600 + Bus Fee'},
                     {title: 'UKG', measurement: '29,100 + Bus Fee'},
                     {title: 'I', measurement: '31,500 + Bus Fee'},
                     {title: 'II', measurement: '32,600 + Bus Fee'},
                     {title: 'III', measurement: '33,300 + Bus Fee'},
                     {title: 'IV', measurement: '33,900 + Bus Fee'},
                     {title: 'V', measurement: '34,500 + Bus Fee'},
                     {title: 'VI', measurement: '37,500 + Bus Fee'},
                     {title: 'VII', measurement: '39,300 + Bus Fee'},
                     {title: 'VIII', measurement: '40,800 + Bus Fee'},
                     {title: 'IX', measurement: '45,600 + Bus Fee'},
                     {title: 'X', measurement: '57,900 + Bus Fee'}];
  return (<>
  <Header />
    <div style={{ display: 'grid', justifyContent:'center', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
     <u> <h3 style={{ textAlign: 'center' }} >FEES STRUCTURE</h3></u>
     <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse', textAlign: 'center', fontSize: '1.2rem' }}>
     <thead >
        <tr>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;Class&nbsp;&nbsp;&nbsp;</th>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;Tuition fee Per Year&nbsp;&nbsp;&nbsp;</th>
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